from flask import Flask, request, jsonify
from controller import compute_expression

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask server!"

@app.route('/compute', methods=['POST'])
def compute():
    data = request.json
    try:
        expression = data['expression']
        result = compute_expression(expression)
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
