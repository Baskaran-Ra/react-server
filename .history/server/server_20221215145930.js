const express = require('express')
const app = express()

app.get("/api",(req,res) =>
{
    res.json({"user":["userOne","userTwo","user"]})
} )