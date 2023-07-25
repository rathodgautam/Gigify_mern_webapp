import express from "express";
import mongoose, { connect, set } from "mongoose";
import connectDB from "./utils/dbConnect.js"
import dotenv from 'dotenv';
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js"
import conversationRoute from "./routes/conversation.route.js"
import messageRoute from "./routes/message.route.js"
import reviewRoute from "./routes/review.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
dotenv.config();


 
app.use(cors({
  origin: ['http://localhost:5173','https://Gigify.onrender.com'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute); 
app.use("/api/users", userRoute); 
app.use("/api/gigs", gigRoute); 
app.use("/api/orders", orderRoute); 
app.use("/api/conversations",conversationRoute); 
app.use("/api/messages", messageRoute); 
app.use("/api/reviews", reviewRoute); 

// ___________Deployment start 

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../dist"))); 
  app.get("*", (req, res) =>
   res.sendFile(path.resolve(__dirname1,  "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running => >>");
  });
}

// ___________Deployment end 


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).send(errorMessage);
}) 

 
const PORT = process.env.PORT;

app.listen(PORT, ()=>{ 
  connectDB();
  console.log("Backend server is running!");
})