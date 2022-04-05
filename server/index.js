const express = require("express")
const app = express();
const users = require("./routes/users")
const debug = require("debug")("my-application")
const bodyParser = require("body-parser")
const login = require('./routes/login')

app.use(bodyParser.json())
app.use("/api/users",users)
app.use("/api/login",login)


app.listen(3030,(req,res) => {
    debug("3030端口服务器启动")
})