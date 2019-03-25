const express = require('express');
const app = express();

app.use((req, res, next) => {

    console.log(req.headers.accesstoken);
    if (req.headers.accesstoken !== "alamakota") {


        res.status(204).send();

    } else
        next();


})

app.get('/', (req, res) => {
    res.send("hello world")
});



app.listen(4000, () => console.log('start server'));