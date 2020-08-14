const express = require('express')
const path = require('path')
var bodyParser  = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose')

const app = express()

app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const messageSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const message = mongoose.model('message', messageSchema)



app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../main-website/public', 'index.html'));
})

app.listen(process.env.PORT, '0.0.0.0', function() {
    console.log('Listening to port:  ' + process.env.PORT);
});

app.post('/form', (req, res) => {

    const randomMessage = new message ({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    randomMessage.save((error,data) => {
        if(error) return console.log('error');
        res.redirect('/');
    })


})
