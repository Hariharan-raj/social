import express from "express";
import routes from "./routes/index.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5001;

app.use(cors());

routes(app);

mongoose.connect("mongodb://localhost:27017/Phone_app").then(() => {
  console.log("Connected to Db and starting on port 5001");
});

app.listen(port);

export default app;
