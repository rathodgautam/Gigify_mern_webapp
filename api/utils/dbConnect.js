import mongoose, { set } from "mongoose";

mongoose.set('strictQuery',set);

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`MongoDB Connected `);
  } catch (error) {
    console.log("not connected to MongoDB");
    console.log(error);
    // handleError(error);
  }
  
}

export default connectDB;