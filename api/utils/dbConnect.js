import mongoose, { set } from "mongoose";

mongoose.set('strictQuery',set);

const connectDB = async() => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO);
    const conn = await mongoose.connect(`mongodb+srv://rathodgautam6018:Rathod1234@cluster0.i46hdee.mongodb.net/?retryWrites=true&w=majority`,{

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

});
    console.log('MongoDB Connected ');
  } catch (error) {
    console.log("not connected to MongoDB");
    console.log(error);
    // handleError(error);
  }
  
}

export default connectDB;