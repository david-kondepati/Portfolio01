from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import requests
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
    allow_origins=[frontend_url, "*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Logging ---
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# --- Brevo API Config ---
BREVO_API_KEY = os.getenv("BREVO_API_KEY")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL", "yourreceiver@gmail.com")

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
    """
    Handles contact form submissions from the portfolio site.
    Always sends from the verified Brevo sender (RECIPIENT_EMAIL),
    and uses the user's email as 'replyTo'.
    """
    if not BREVO_API_KEY:
        raise HTTPException(status_code=500, detail="Brevo API key not configured")

    try:
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif;">
                <h2 style="color:#1a73e8;">New Portfolio Message</h2>
                <p><b>Name:</b> {contact.name}</p>
                <p><b>Email:</b> {contact.email}</p>
                <p><b>Subject:</b> {contact.subject}</p>
                <p><b>Message:</b></p>
                <div style="background:#f5f5f5;padding:10px;border-radius:8px;">{contact.message}</div>
            </body>
        </html>
        """

        payload = {
            "sender": {"name": "Portfolio Contact Form", "email": RECIPIENT_EMAIL},
            "to": [{"email": RECIPIENT_EMAIL}],
            "replyTo": {"email": contact.email, "name": contact.name},
            "subject": f"Portfolio Contact: {contact.subject}",
            "htmlContent": html_content,
        }

        headers = {
            "accept": "application/json",
            "api-key": BREVO_API_KEY,
            "content-type": "application/json",
        }

        response = requests.post(
            "https://api.brevo.com/v3/smtp/email",
            headers=headers,
            json=payload,
            timeout=15,
        )

        if response.status_code not in (200, 201):
            logger.error(f"❌ Brevo API error: {response.text}")
            raise HTTPException(status_code=500, detail=f"Brevo API error: {response.text}")

        logger.info(f"✅ Email sent successfully (replyTo: {contact.email})")
        return {"success": True, "message": "Email sent successfully"}

    except Exception as e:
        logger.error(f"❌ Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")


# Include API routes
app.include_router(api_router)
