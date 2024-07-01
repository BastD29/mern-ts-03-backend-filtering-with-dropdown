import config from "./config";
import express, { Request, Response } from "express";
import user from "./routes/user";
import connectDB from "./db2";

connectDB();

const { port, nodeEnv } = config;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", user);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} in ${nodeEnv} mode`
  );
});
