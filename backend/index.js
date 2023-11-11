const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors")

connectToMongo();

const app = express()
const port = 4100;

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use('/api/auth',require("./routes/auth.js"))
app.use("/api/passes",require("./routes/passes"))

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})
