import React, { useState } from 'react';
import axios from 'axios';

function Uploading() {
    const [result, setResult] = useState('');
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);

    const onFileChange1 = event => {
        setFile1(event.target.files[0]);
    };

    const onFileChange2 = event => {
        setFile2(event.target.files[0]);
    };

    const onFileUpload = () => {
        const formData = new FormData(); 
        formData.append('file1', file1); 
        formData.append('file2', file2); 
        axios.post("/checkPlagiarism", formData)
            .then(response => setResult(`Similarity: ${response.data}%`))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container">
            <input type="file" onChange={onFileChange1} />
            <input type="file" onChange={onFileChange2} />
            <button onClick={onFileUpload}>Upload and Check Plagiarism</button>
            <p id="result">{result}</p>
        </div>
    );
}

export default Uploading;