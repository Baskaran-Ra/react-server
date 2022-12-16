const express = require('express')
const app = express()

app.get("/api",(req,res) =>
{
    res.json({"user":["userOne","userTwo","userThree"]})
} )

app.listen(, () => {console.log("Server started on port 5000 ") })