import express from "express";
import dotenv from "dotenv";
import connnectDatabase from "./mongodb.js";
import curdRoute from "./routes/curdRoute.js";
import cors from "cors";
const app = express();

dotenv.config({ path: "./.env" });

app.use(express.json());

app.use(cors());



app.listen(process.env.PORT, () => {
  console.log(`server li ${process.env.PORT}`);
});

connnectDatabase();

app.use("/api", curdRoute);

export default app;
