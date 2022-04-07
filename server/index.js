const express = require("express")
const app = express();
const users = require("./routes/users")
const debug = require("debug")("my-application")
const bodyParser = require("body-parser")
const login = require('./routes/login')

app.use(bodyParser.json())
app.use("/api/users",users)
app.use("/api/login",login)


app.listen(8080,(req,res) => {
    debug("8080 port service run")
})