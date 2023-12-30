import mongoose from "mongoose";

const exampleSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const ExampleModel = mongoose.model("Example", exampleSchema);

export default ExampleModel;
