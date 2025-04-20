import mongoose from "mongoose";

const connectMongo = async () => {
   try {
       await mongoose.connect(process.env.MONGO_URI)
   } catch (e) {
      console.error("Mongoose Error:" + e.error)
   }
}

export default connectMongo