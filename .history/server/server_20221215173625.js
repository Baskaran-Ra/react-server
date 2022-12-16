const express = require('express')
const app = express()

app.get("/api",(req,res) =>
{
    res.json({"user":["userOne","userTwo","userThree"]})
} )

app.listen(999kill -9 PID9, () => {console.log("Server started on port 9999 ") })