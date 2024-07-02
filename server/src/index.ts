import config from "./config";
import express from "express";
import cors from "cors";
import user from "./routes/user";
import connectDB from "./db2";

connectDB();

const { port, nodeEnv } = config;

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://localhost:5175"];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      origin.includes("Postman") ||
      allowedOrigins.includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", user);

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} in ${nodeEnv} mode`
  );
});
