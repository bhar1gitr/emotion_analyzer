from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)

@app.route('/api/analyze', methods=['POST'])
def analyze_emotion():
    data = request.get_json()
    text = data['text']
    analysis = TextBlob(text)
    sentiment = analysis.sentiment.polarity

    if sentiment > 0:
        emotion = "Positive"
    elif sentiment < 0:
        emotion = "Negative"
    else:
        emotion = "Neutral"

    return jsonify({'emotion': emotion})

if __name__ == '__main__':
    app.run(debug=True)
