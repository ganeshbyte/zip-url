require("dotenv").config();
const express = require("express");
const connectToDb = require("./connect")
const userRoutes = require("./routes/user.routes");
const staticRoutes = require("./routes/static.routes");
const app = express();

app.set('view engine', 'ejs');
app.set('views', "view");

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", staticRoutes);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    console.log("I am logged.")
    res.status(200).json({ msg: "Hello World!" });
});

const start = async () => {
    try {
        console.log("Hello World")
        await connectToDb("mongodb://127.0.0.1:27017/User");
        console.log("connected to the database");
        app.listen(port, async () => {
            console.log(`Server started at port no ${port}`)
        });
    } catch (error) {
        console.log(error)
    }
}

//starting our application
start();