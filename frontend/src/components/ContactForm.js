import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

// ✅ Ensure this is set in your .env file (both locally and on Render frontend):
// REACT_APP_BACKEND_URL=https://your-backend-url.onrender.com
const API = `${process.env.REACT_APP_BACKEND_URL}/api/contact`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // ✅ Send POST request to FastAPI backend
      const response = await axios.post(API, formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 4000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError(
        err.response?.data?.detail ||
          'Failed to send message. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-card">
              <div className="contact-header">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-subtitle">
                  Have a project in mind? Let's work together to create something amazing.
                </p>
              </div>

              {/* ✅ Success message */}
              {success && (
                <div className="alert alert-custom alert-success">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {/* ❌ Error message */}
              {error && (
                <div className="alert alert-custom alert-danger">
                  <i className="bi bi-exclamation-circle-fill"></i>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <i className="bi bi-person-fill"></i> Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <i className="bi bi-envelope-fill"></i> Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        <i className="bi bi-tag-fill"></i> Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        <i className="bi bi-chat-dots-fill"></i> Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-submit" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill"></i> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="footer-text">
              <p>© {new Date().getFullYear()} David Satya Vikas Kondepati. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
