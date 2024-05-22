from flask import Flask, request, jsonify
from flask_cors import CORS
from controller import *
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return "Welcome to the Flask server!"

@app.route('/compute', methods=['POST'])
def compute():
    data = request.json
    try:
        print(data['expression'])
        expression = data['expression']
        print("hghghghg")
        result = compute_expression(expression)
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

def compute_expression(expression):
    
    try:
        print(87)
        result = compute1(expression)
       
        return result
    except Exception as e:
        raise ValueError("Invalid expression")

if __name__ == '__main__':
    app.run(debug=True)
