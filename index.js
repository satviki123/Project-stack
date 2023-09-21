const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World! from raju')
})
app.get('/signin', (req, res) => {
    res.render('signin');
})
app.get('/signup', (req, res) => {
    res.render("signup");
})
app.get("/signupsubmit", (req,res) => {
    const first_name = req.params.first_name;
    const last_name = req.params.last_name;
    const email_id = req.params.email_id;
    const pass = req.params.pass;

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})