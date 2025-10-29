from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiosmtplib
import os
import logging
from pathlib import Path

# --- Load Environment Variables ---
ROOT_DIR = Path(__file__).resolve().parent
load_dotenv(ROOT_DIR / ".env")

# --- FastAPI App Setup ---
app = FastAPI(title="Portfolio Backend API")

# --- Router Setup ---
api_router = APIRouter(prefix="/api")

# --- CORS Configuration ---
frontend_url = os.getenv("FRONTEND_URL", "*")
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[frontend_url, "*"],  # allow both for dev safety
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Logging ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# --- Gmail SMTP Config ---
GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_APP_PASSWORD = os.getenv("GMAIL_APP_PASSWORD")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL")

# --- Pydantic Model ---
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# --- Routes ---
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running successfully 🚀"}

@api_router.post("/contact")
async def send_contact_email(contact: ContactRequest):
    try:
        # Compose email
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Portfolio Contact: {contact.subject}"
        msg["From"] = GMAIL_USER
        msg["To"] = RECIPIENT_EMAIL

        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif;">
                <h2 style="color:#ff6b2b;">New Portfolio Message</h2>
                <p><b>Name:</b> {contact.name}</p>
                <p><b>Email:</b> {contact.email}</p>
                <p><b>Subject:</b> {contact.subject}</p>
                <p><b>Message:</b></p>
                <div style="background:#f5f5f5;padding:10px;border-radius:8px;">{contact.message}</div>
            </body>
        </html>
        """

        msg.attach(MIMEText(html_body, "html"))

        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username=GMAIL_USER,
            password=GMAIL_APP_PASSWORD,
        )

        logger.info(f"✅ Email sent successfully from {contact.email}")
        return {"success": True, "message": "Email sent successfully"}

    except Exception as e:
        logger.error(f"❌ Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

# Include API routes
app.include_router(api_router)
