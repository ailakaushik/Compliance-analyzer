import os
import asyncio
from typing import Dict
from pydantic import BaseModel, Field
from dotenv import load_dotenv

# Optional: Load from .env file
try:
    from dotenv import load_dotenv
    load_dotenv()
    print("✓ Loaded .env file")
except ImportError:
    print("python-dotenv not installed. Using system environment variables.")

from crawl4ai import AsyncWebCrawler, CrawlerRunConfig, LLMConfig, BrowserConfig, CacheMode
from crawl4ai.extraction_strategy import LLMExtractionStrategy

class NGORegistrationInfo(BaseModel):
    """Updated schema to match the actual content we're scraping"""
    requirement: str = Field(..., description="Registration requirement or guideline")
    description: str = Field(..., description="Detailed description of the requirement")
    category: str = Field(..., description="Category of the requirement (eligibility, documentation, etc.)")

def check_aws_credentials():
    """Check if AWS credentials are properly configured"""
    access_key = os.getenv('AWS_ACCESS_KEY_ID')
    secret_key = os.getenv('AWS_SECRET_ACCESS_KEY')
    region = os.getenv('AWS_DEFAULT_REGION')
    
    print("=== AWS Credentials Check ===")
    print(f"Access Key ID: {'✓ Set' if access_key else '✗ Not set'}")
    print(f"Secret Access Key: {'✓ Set' if secret_key else '✗ Not set'}")
    print(f"Default Region: {region if region else '✗ Not set (will use us-east-1)'}")
    
    if not access_key or not secret_key:
        print("\n❌ AWS credentials are missing!")
        print("\nTo fix this, choose one of these methods:")
        print("\n1. Using AWS CLI (Recommended):")
        print("   aws configure")
        print("\n2. Using environment variables:")
        print("   export AWS_ACCESS_KEY_ID=your_access_key")
        print("   export AWS_SECRET_ACCESS_KEY=your_secret_key")
        print("   export AWS_DEFAULT_REGION=us-east-1")
        print("\n3. Using .env file:")
        print("   Create a .env file with:")
        print("   AWS_ACCESS_KEY_ID=your_access_key")
        print("   AWS_SECRET_ACCESS_KEY=your_secret_key")
        print("   AWS_DEFAULT_REGION=us-east-1")
        return False
    
    print("✓ AWS credentials are configured!")
    return True

async def extract_structured_data_using_llm(
    aws_region: str = None,
    model_id: str = "anthropic.claude-3-sonnet-20240229-v1:0",
    extra_headers: Dict[str, str] = None,
):
    # Use region from environment or default
    if not aws_region:
        aws_region = os.getenv('AWS_DEFAULT_REGION', 'us-east-1')
    
    print(f"\n--- Extracting Structured Data with AWS Bedrock ({model_id}) ---")
    print(f"Region: {aws_region}")

    # Check credentials before proceeding
    if not check_aws_credentials():
        return

    browser_config = BrowserConfig(headless=True)

    # Extra arguments for the LLM
    extra_args = {
        "temperature": 0.7,
        "top_p": 0.9,
        "max_tokens": 2000,
        "aws_region": aws_region,
        "anthropic_version": "bedrock-2023-05-31",
    }

    if extra_headers:
        extra_args["extra_headers"] = extra_headers

    # Create LLM configuration for AWS Bedrock
    llm_config = LLMConfig(
        provider=f"bedrock/{model_id}",  # Fixed: Use bedrock/model-id format
        api_token=None,  # Not needed for Bedrock
    )

    # Create extraction strategy
    extraction_strategy = LLMExtractionStrategy(
        llm_config=llm_config,
        schema=NGORegistrationInfo.model_json_schema(),
        extraction_type="schema",
        instruction="""From the crawled content about NGO registration guidelines, extract all the requirements, 
        eligibility criteria, and documentation needed. Structure each item with:
        - requirement: The specific requirement or guideline
        - description: Detailed explanation of what's needed
        - category: Type of requirement (eligibility, documentation, process, etc.)
        
        Extract as many relevant items as possible from the content.""",
        extra_args=extra_args,
        chunk_token_threshold=1500,
        apply_chunking=True,
        input_format="markdown",
        overlap_rate=0.1,
    )

    crawler_config = CrawlerRunConfig(
        cache_mode=CacheMode.BYPASS,
        word_count_threshold=1,
        page_timeout=80000,
        extraction_strategy=extraction_strategy,
    )

    try:
        print("\n🕷  Starting web crawling...")
        async with AsyncWebCrawler(config=browser_config) as crawler:
            result = await crawler.arun(
                url="https://nationaltrust.nic.in/guidelines-for-ngo-registration/", 
                config=crawler_config
            )
            
            print("\n📊 Extraction Results:")
            print("=" * 50)
            if result.extracted_content:
                print(result.extracted_content)
                
                # Show token usage if available
                try:
                    extraction_strategy.show_usage()
                except Exception as e:
                    print(f"Could not show usage stats: {e}")
            else:
                print("No structured data extracted")
                
            if hasattr(result, 'success') and not result.success:
                print(f"❌ Crawling failed: {result.error_message if hasattr(result, 'error_message') else 'Unknown error'}")
                
    except Exception as e:
        print(f"❌ Error during extraction: {str(e)}")
        print("\n🔧 Troubleshooting steps:")
        print("1. Verify AWS credentials are properly configured")
        print("2. Ensure you have access to Bedrock in your AWS region")
        print("3. Check if the Claude model is enabled in Bedrock console")
        print("4. Verify your AWS user has BedrockFullAccess permissions")
        print("5. Make sure crawl4ai is updated to the latest version")

def main():
    print("🚀 Starting NGO Registration Guidelines Extractor")
    print("=" * 55)
    
    # Show current environment
    print(f"Current working directory: {os.getcwd()}")
    print(f"Python version: {os.sys.version}")
    
    # Run the extraction
    asyncio.run(extract_structured_data_using_llm())

if __name__ == "_main_":
    main()