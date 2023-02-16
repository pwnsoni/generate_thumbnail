require('dotenv').config();
const express = require('express');
const multer = require('multer');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.get('/api/test', (req, res) => {
  res.status(200).json({statusCode: 200, message: "hello from api test!"});
})

app.post('/api/upload', 
    multer({ dest: './static/temp/', limits: { fieldSize: 8 * 1024 * 1024 } })
        .single('file'),
    async (req, res) => {
        console.log(req.file.path)
        res.status(200).json({statusCode: 200, message: "Data Uploaded Successfully"}); 
    }
)

module.exports = {app, express}