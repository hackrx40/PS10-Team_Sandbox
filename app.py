# new experimental
from flask import Flask, request, jsonify, render_template
import requests
from flask_cors import CORS
from bs4 import BeautifulSoup

app = Flask(__name__)

# Replace with the actual URL of the Indian Kanoon API
IK_API_URL = "https://api.indiankanoon.org"

# Replace with your API Token
API_TOKEN = "f93d1774ba0cfbe57d2648d98443d437fa611892"

# Configure CORS
CORS(app, origins=['http://localhost:3000'])

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search/', methods=['POST'])
def search_query():
    form_input = request.form.get('formInput')
    pagenum = request.form.get('pagenum')
    print(f"Received formInput: {form_input}, pagenum: {pagenum}")
    if not form_input or not pagenum:
        return jsonify({"error": "formInput and pagenum are required."}), 400

    headers = {"Authorization": f"Token {API_TOKEN}"}

    params = {
        "formInput": form_input,
        "pagenum": pagenum
    }

    response = requests.post(f"{IK_API_URL}/search/", headers=headers, params=params)
    data = response.json()

    # Print the results on the console
    print(data)

    return jsonify(data)

@app.route('/doc_details/', methods=['POST'])
def get_doc_details():
    tid = request.form.get('tid')
    print(f"Received tid: {tid}")
    if not tid:
        return jsonify({"error": "tid is required."}), 400

    headers = {"Authorization": f"Token {API_TOKEN}"}

    response = requests.post(f"{IK_API_URL}/doc/{tid}/", headers=headers)  # Use requests.post here
    data = response.json()

    # Extract and convert the 'doc' property to text
    doc_html = data.get('doc')
    doc_text = BeautifulSoup(doc_html, 'html.parser').get_text()
    print(doc_text)
    data['doc_text'] = doc_text

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)