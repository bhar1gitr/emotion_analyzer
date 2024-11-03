import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [emotion, setEmotion] = useState('');

    const analyzeEmotion = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/analyze', { text });
            setEmotion(response.data.emotion);
        } catch (error) {
            console.error("There was an error analyzing the emotion!", error);
        }
    };

    return (
        <div className="App">
            <h1>Emotion Analyzer</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div style={{ margin:'20px 0px' }}>
              <button onClick={analyzeEmotion}>Analyze Emotion</button>
            </div>
            {emotion && <h2>Detected Emotion: {emotion}</h2>}
        </div>
    );
}

export default App;
