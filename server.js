const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router()
const app = express();
const FormData = require('form-data')
const {engine} = require('express-handlebars');

app.use(express.urlencoded({ extended: true })); // Parse form data
// app.use(express.jsons());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home');
});



app.post('/', (req, res) => {
    try {
        console.log(req.body);
        // res.send('Login Successful');
        res.send("Username: " + req.body.username + " Password: " + req.body.password);
        console.log("Username: " + req.body.username + " Password: " + req.body.password);
        return
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
        return
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

