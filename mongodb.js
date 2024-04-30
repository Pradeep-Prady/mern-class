import mongoose from "mongoose";

const connnectDatabase = () => {

    console.log(process.env.mongo_url)
  mongoose.connect(process.env.mongo_url).then(() => {
    console.log("mongodb connected");
  });
};

export default connnectDatabase;
