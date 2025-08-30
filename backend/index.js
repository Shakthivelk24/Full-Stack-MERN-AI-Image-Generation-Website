import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connent.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); // Add await here
    app.listen(8080, () =>
      console.log("Server started on http://localhost:8080")
    );
  } catch (error) {
    console.log('Server startup error:', error);
  }
};

startServer();