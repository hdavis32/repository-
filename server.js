const path = require("path")
const express = require("express")
const app = express()
app.use(express.static(path.join(__dirname, "public")))

app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/SignUp.html"))
})

app.listen(3000, ()=>{console.log("ready")})