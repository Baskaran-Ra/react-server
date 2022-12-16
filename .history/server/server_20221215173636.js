const express = require('express')
const app = express()

app.get("/api",(req,res) =>
{
    res.json({"user":["userOne","userTwo","userThree"]})
} )

app.listen(9999, () => {console.log("Server started on port 9999 ") })