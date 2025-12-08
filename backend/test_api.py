import requests
import json

# Test the API with different languages

# First, login to get a token
login_data = {
    "email": "admin@example.com",
    "password": "admin123"
}

print("1. Testing Login...")
login_response = requests.post("http://localhost:5000/api/auth/login", json=login_data)
print(f"Status: {login_response.status_code}")
print(f"Response: {login_response.json()}")

if login_response.status_code == 200:
    token = login_response.json()['token']
    print(f"\nToken obtained: {token[:50]}...")
    
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    
    # Test with different languages
    test_messages = {
        'english': "Hello, this is an English message. Free money now!",
        'bangla': "আপনি ১ লক্ষ টাকা জিতেছেন! কল করুন",
        'spanish': "¡Felicitaciones! Has ganado 1000 euros gratis",
        'french': "Bonjour! Vous avez gagné 1000 euros gratuits",
        'german': "Hallo! Sie haben 1000 Euro gewonnen"
    }
    
    print("\n" + "="*60)
    print("2. Testing Detection with Different Languages...")
    print("="*60)
    
    for lang, message in test_messages.items():
        print(f"\nTesting {lang.upper()}:")
        print(f"Message: {message}")
        
        predict_data = {
            "message": message,
            "type": "email"
        }
        
        response = requests.post("http://localhost:5000/api/predict", json=predict_data, headers=headers)
        print(f"Status Code: {response.status_code}")
        
        result = response.json()
        if 'error' in result:
            print(f"❌ Error: {result['error']}")
            if 'language' in result:
                print(f"   Detected Language: {result['language']}")
        else:
            print(f"✓ Spam Detection: {result.get('isSpam', 'N/A')}")
            print(f"  Language: {result.get('language', 'N/A')}")
            print(f"  Confidence: {result.get('confidence', 'N/A')}")
else:
    print("Login failed!")
