from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Gmail SMTP Configuration
GMAIL_USER = os.environ.get('GMAIL_USER')
GMAIL_APP_PASSWORD = os.environ.get('GMAIL_APP_PASSWORD')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL')

# Define Models
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running"}

@api_router.post("/contact")
async def send_contact_email(contact: ContactRequest):
    try:
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"Portfolio Contact: {contact.subject}"
        msg['From'] = GMAIL_USER
        msg['To'] = RECIPIENT_EMAIL
        
        # Create HTML email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <h2 style="color: #ff6b2b; border-bottom: 3px solid #ff6b2b; padding-bottom: 10px;">
                        New Portfolio Contact Message
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> {contact.name}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Email:</strong> {contact.email}</p>
                        <p style="margin: 10px 0;"><strong style="color: #555;">Subject:</strong> {contact.subject}</p>
                    </div>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="white-space: pre-wrap; color: #555;">{contact.message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #888; font-size: 12px;">
                        <p>This message was sent from your portfolio contact form</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email via Gmail SMTP
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=GMAIL_USER,
            password=GMAIL_APP_PASSWORD,
        )
        
        logger.info(f"Contact email sent successfully from {contact.email}")
        return {"success": True, "message": "Email sent successfully"}
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)