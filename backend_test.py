#!/usr/bin/env python3
"""
Backend API Testing for Portfolio Contact Form
Tests the contact form backend API with Gmail SMTP integration
"""

import requests
import json
import sys
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://react-bootstrap-code.preview.emergentagent.com')
API_BASE_URL = f"{BACKEND_URL}/api"

def test_api_health():
    """Test if the API is running"""
    print("🔍 Testing API Health Check...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "running" in data["message"].lower():
                print("✅ API Health Check: PASSED")
                return True
            else:
                print("❌ API Health Check: FAILED - Unexpected response format")
                return False
        else:
            print(f"❌ API Health Check: FAILED - Status code {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ API Health Check: FAILED - Connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ API Health Check: FAILED - Unexpected error: {e}")
        return False

def test_contact_form_valid():
    """Test contact form with valid data"""
    print("\n🔍 Testing Contact Form - Valid Data...")
    
    valid_data = {
        "name": "John Doe",
        "email": "test@example.com", 
        "subject": "Project Inquiry",
        "message": "Hello, I would like to discuss a project with you."
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/contact",
            json=valid_data,
            headers={"Content-Type": "application/json"},
            timeout=30  # Increased timeout for email sending
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "sent successfully" in data.get("message", "").lower():
                print("✅ Contact Form Valid Data: PASSED")
                return True
            else:
                print("❌ Contact Form Valid Data: FAILED - Unexpected response format")
                return False
        else:
            print(f"❌ Contact Form Valid Data: FAILED - Status code {response.status_code}")
            return False
            
    except requests.exceptions.Timeout:
        print("❌ Contact Form Valid Data: FAILED - Request timeout (email sending may be slow)")
        return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact Form Valid Data: FAILED - Connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact Form Valid Data: FAILED - Unexpected error: {e}")
        return False

def test_contact_form_invalid_email():
    """Test contact form with invalid email format"""
    print("\n🔍 Testing Contact Form - Invalid Email Format...")
    
    invalid_data = {
        "name": "Jane Smith",
        "email": "invalid-email-format",
        "subject": "Test Subject", 
        "message": "Test message with invalid email"
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/contact",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ Contact Form Invalid Email: PASSED - Validation error as expected")
            return True
        elif response.status_code == 400:  # Bad request also acceptable
            print("✅ Contact Form Invalid Email: PASSED - Bad request as expected")
            return True
        else:
            print(f"❌ Contact Form Invalid Email: FAILED - Expected validation error, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact Form Invalid Email: FAILED - Connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact Form Invalid Email: FAILED - Unexpected error: {e}")
        return False

def test_contact_form_missing_fields():
    """Test contact form with missing required fields"""
    print("\n🔍 Testing Contact Form - Missing Required Fields...")
    
    # Test with missing name
    incomplete_data = {
        "email": "test@example.com",
        "subject": "Test Subject",
        "message": "Test message with missing name"
    }
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/contact",
            json=incomplete_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ Contact Form Missing Fields: PASSED - Validation error as expected")
            return True
        elif response.status_code == 400:  # Bad request also acceptable
            print("✅ Contact Form Missing Fields: PASSED - Bad request as expected")
            return True
        else:
            print(f"❌ Contact Form Missing Fields: FAILED - Expected validation error, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact Form Missing Fields: FAILED - Connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact Form Missing Fields: FAILED - Unexpected error: {e}")
        return False

def test_contact_form_empty_data():
    """Test contact form with completely empty data"""
    print("\n🔍 Testing Contact Form - Empty Data...")
    
    try:
        response = requests.post(
            f"{API_BASE_URL}/contact",
            json={},
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error expected
            print("✅ Contact Form Empty Data: PASSED - Validation error as expected")
            return True
        elif response.status_code == 400:  # Bad request also acceptable
            print("✅ Contact Form Empty Data: PASSED - Bad request as expected")
            return True
        else:
            print(f"❌ Contact Form Empty Data: FAILED - Expected validation error, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact Form Empty Data: FAILED - Connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact Form Empty Data: FAILED - Unexpected error: {e}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 PORTFOLIO BACKEND API TESTING")
    print("=" * 60)
    print(f"Testing API at: {API_BASE_URL}")
    print()
    
    # Track test results
    test_results = []
    
    # Run all tests
    test_results.append(("API Health Check", test_api_health()))
    test_results.append(("Contact Form - Valid Data", test_contact_form_valid()))
    test_results.append(("Contact Form - Invalid Email", test_contact_form_invalid_email()))
    test_results.append(("Contact Form - Missing Fields", test_contact_form_missing_fields()))
    test_results.append(("Contact Form - Empty Data", test_contact_form_empty_data()))
    
    # Print summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed!")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)