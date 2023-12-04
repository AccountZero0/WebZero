const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/route");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

app.use("/api",routes);
app.get("/", (req,res,next) => {
    res.status(200).json({
        message: 'Hello world'
    })
})
app.listen(process.env.PORT || 3000, () => console.log("server is running"));