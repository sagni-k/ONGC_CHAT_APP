//packages required
import express from "express";//express is a package that has functions for server creation and related work, without it, we have to write low level code to start a server and define its functionality
import dotenv from "dotenv"; //package used for environmrnt variables
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();//it has started the program that can receive requests from frontend,process it and respond

dotenv.config();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());//to parse the incoming request with JSON payload (from req.body)
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(5000, () => {                              //our app goes live- it starts at port 5000 and receives incoming request
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`)
});
