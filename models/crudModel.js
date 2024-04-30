import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  hobbies: [
    {
      type: String,
    },
  ],
});

const CRUD = mongoose.model("CRUD", crudSchema);
export default CRUD;