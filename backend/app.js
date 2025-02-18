const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express()
const cors = require("cors")

//load the environmental variables from dotenv file
dotenv.config();


// middleware to parse the json
app.use(express.json());

// middleware to enabled to cors
app.use(cors({  
    origin: 'https://mern-stack-app-1.netlify.app' // Replace with your actual Netlify URL  
}));

connectDB();

// use the user routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

//run the server

app.listen(PORT, () => {
    console.log(`the server is running at the url localhost:${PORT} `)
})