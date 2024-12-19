import os
import requests
from flask import Flask, request, jsonify, redirect
from flask_cors import CORS  # Enable CORS
from openai import OpenAI
from dotenv import load_dotenv
import json
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

# Set up OpenAI API
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))



# Define the chatbot API endpoint
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({'response': 'No prompt provided'}), 400

    # Call the OpenAI GPT-4 API to generate a response
    completion = openai_client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=1000,
        temperature=0.01
    )

    response = completion.choices[0].message.content
    return jsonify({'response': response})
# Redirect to TrueLayer for authentication
@app.route('/api/banking/truelayer/connect')
def connect_to_truelayer():
    client_id = os.getenv('TRUELAYER_CLIENT_ID')
    redirect_uri = os.getenv('TRUELAYER_REDIRECT_URI')
    auth_url = f"https://auth.truelayer.com/?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&scope=accounts"
    return redirect(auth_url)

# Handle TrueLayer callback to get access token
@app.route('/api/banking/truelayer/callback')
def truelayer_callback():
    code = request.args.get('code')  # Extract authorization code from query parameters
    client_id = os.getenv('TRUELAYER_CLIENT_ID')
    client_secret = os.getenv('TRUELAYER_CLIENT_SECRET')
    redirect_uri = os.getenv('TRUELAYER_REDIRECT_URI')

    # Exchange the authorization code for an access token
    token_url = "https://auth.truelayer.com/connect/token"
    token_data = {
        'grant_type': 'authorization_code',
        'client_id': client_id,
        'client_secret': client_secret,
        'redirect_uri': redirect_uri,
        'code': code
    }
    token_response = requests.post(token_url, data=token_data)
    token_json = token_response.json()

    if 'access_token' not in token_json:
        return jsonify({"error": "Failed to retrieve access token", "details": token_json}), 500

    access_token = token_json['access_token']

    # Fetch account details
    accounts_url = "https://api.truelayer.com/data/v1/accounts"
    headers = {
        'Authorization': f'Bearer {access_token}'
    }
    accounts_response = requests.get(accounts_url, headers=headers)
    accounts_json = accounts_response.json()

    return jsonify(accounts_json)

@app.route('/financial-insights', methods=['GET'])
def get_financial_insights():
    # Mock data for the response (or load data from your dataset)
    data = {
        "labels": ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "datasets": [
            {
                "label": "Expenditure",
                "color": "info",
                "data": [1200, 2300, 1100, 1600, 3200, 1700, 1300, 1250, 1400],
            },
            {
                "label": "Income",
                "color": "primary",
                "data": [1500, 3000, 4000, 2700, 2900, 3000, 3600, 3800, 5000],
            },
            {
                "label": "Savings",
                "color": "green",
                "data": [600, 500, 850, 1500, 650, 2000, 600, 3000, 600],
            },
        ],
        "title": "Monthly Income, Expenditure, and Savings"
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)  # Ensure the backend runs on port 8000
