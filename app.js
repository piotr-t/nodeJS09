const express = require('express');
const app = express();

/* app.use((req, res, next) => {

    console.log(req.headers.accesstoken);
    if (req.headers.accesstoken !== "alamakota") {


        res.status(204).send();

    } else
        next();


}) */

/* app.get('/', (req, res) => {
    res.send("hello world")
}); */

app.set('view engine', 'pug')
app.get('/', function (req, res) {
    const scope = { title: 'some title', header: 'heloo!' };
    res.render('index', scope);
});




app.listen(4200, () => console.log('start server'));