import json
import boto3
import base64
import os
import re

bedrock_runtime = boto3.client(
    service_name='bedrock-runtime', 
    region_name=os.environ['AWS_REGION']
)

def analyze(event, context):
    headers = {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST"
    }
    try:
        body = json.loads(event.get("body", "{}"))
        policy_base64 = body.get("policy_document")
        if not policy_base64:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "No policy document."})}
        
        ngo_policy_text = base64.b64decode(policy_base64).decode('utf-8')
        
        # The "Safe" Prompt that asks for document comparison, not expert advice
        prompt = f"""
        You are a helpful AI assistant that specializes in comparing documents.
        I will provide you with two documents.
        Document 1 is a "Source Document" containing a list of required points.
        Document 2 is a "Policy Document" that needs to be checked.

        Your task is to check if the key points from the Source Document are present in the Policy Document.
        Based on your comparison, you MUST generate a JSON object with the exact following structure and keys:
        - "overall_compliance_score": An estimated score from 0 to 100 based on how many points are covered.
        - "executive_summary": A very brief, one or two-sentence summary of the comparison.
        - "compliance_breakdown": An array of objects. Each object must have these keys: "area", "status" (use 'Covered', 'Partially Covered', or 'Missing'), "analysis" (your reasoning), and "recommendation" (a suggestion for text to add).

        **Document 1: Source Document (Required Points)**
        ---
        1. Designated Bank Account: A specific bank account must be mentioned at the State Bank of India (SBI), New Delhi Main Branch for receiving all foreign funds.
        2. No Mixing Funds: The policy must state that foreign funds will not be mixed with local funds.
        3. Annual Reporting: The policy must mention submitting an annual report using Form FC-4.
        ---

        **Document 2: Policy Document (To Be Checked)**
        ---
        {ngo_policy_text}
        ---

        CRITICAL INSTRUCTION: Your entire response must ONLY be the raw JSON object. Do not include any other text, apologies, or explanations. Start with {{ and end with }}.
        """
        
        request_body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 4096,
            "messages": [{"role": "user", "content": [{"type": "text", "text": prompt}]}]
        })
        
        response = bedrock_runtime.invoke_model(
            body=request_body,
            # --- THE CRITICAL FIX ---
            # Use the FULL ARN for the provisioned model that your hackathon provided.
            # It will look something like this. YOU MUST FIND THIS ARN FROM YOUR PORTAL.
            modelId='arn:aws:bedrock:us-east-2:144274058030:inference-profile/us.anthropic.claude-3-haiku-20240307-v1:0', 
            contentType='application/json',
            accept='application/json'
        )
        
        response_body = json.loads(response.get('body').read())
        ai_response_text = response_body['content'][0]['text']

        json_match = re.search(r"\{.*\}", ai_response_text, re.DOTALL)
        if not json_match:
            print(f"[ERROR] No JSON found in AI response. Raw response: {ai_response_text}")
            raise ValueError("AI response did not contain a valid JSON object.")
        json_string = json_match.group(0)

        return {
            "statusCode": 200,
            "headers": headers,
            "body": json_string 
        }

    except Exception as e:
        print(f"[ERROR] An exception occurred: {e}")
        return {"statusCode": 500, "headers": headers, "body": json.dumps({"error": str(e)})}