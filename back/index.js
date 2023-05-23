const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const db = require('./connection/dbConnection');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}))
const user = require('./controller/user');

app.post('/registration', user.Register);
app.post('/login', user.Login);


app.listen(PORT, () => {
    console.log(`server listening on port-${PORT}`)
})