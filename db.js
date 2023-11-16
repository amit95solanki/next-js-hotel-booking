import mongoose from "mongoose";

const URI = "mongodb+srv://amitsolanki3895:admin@oyo.ysciy1q.mongodb.net/kotha-service";

const connectDB = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  } else {
    const newDB = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedDB = newDB;
    console.log("mongdb is connected");
    return newDB;
  }
};

export default connectDB;
