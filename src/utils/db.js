import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.url);
  } catch (error) {
    throw new "Server Error | Connection failed"();
  }
};

export default connect;
