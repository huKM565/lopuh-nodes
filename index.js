const express = require("express")
const io = require("socket.io")

const socket = io()
const app = express(socket)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/main/index.html")
})

app.listen(80)
app.use(express.static(__dirname + "/static"))