// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const natural = require('natural');
const TfIdf = natural.TfIdf;
const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/checkPlagiarism', upload.single('file'), (req, res) => {
    const fileContent = fs.readFileSync(req.file.path, 'utf8');
    const existingData = fs.readFileSync('existingData.txt', 'utf8');
    const similarityRatio = calculateSimilarity(fileContent, existingData) * 100;
    res.send(`Similarity: ${similarityRatio.toFixed(2)}%`);
});

app.listen(3000, () => console.log('Server started on port 3000'));

function calculateSimilarity(doc1, doc2) {
    const tfidf = new TfIdf();
    tfidf.addDocument(doc1);
    tfidf.addDocument(doc2);
    const doc1Vector = tfidf.listTerms(0 /* in document index 0 */).map(term => term.tfidf);
    const doc2Vector = tfidf.listTerms(1 /* in document index 1 */).map(term => term.tfidf);
    return cosineSimilarity(doc1Vector, doc2Vector);
}

function cosineSimilarity(vec1, vec2) {
    const dotProduct = vec1.map((val, i) => val * vec2[i]).reduce((a, b) => a + b, 0);
    const magnitude = Math.sqrt(vec1.reduce((a, b) => a + b * b, 0)) * Math.sqrt(vec2.reduce((a, b) => a + b * b, 0));
    return dotProduct / magnitude;
}