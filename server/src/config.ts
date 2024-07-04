import dotenv from "dotenv";
import path from "path";
const env = process.env.NODE_ENV || "local";
// dotenv.config({ path: `./environments/.env.${env}` });
dotenv.config({ path: path.resolve(__dirname, `../environments/.env.${env}`) });
import { checkEnvVariables } from "./utils/checkEnvVariables";

// import * as dotenv from "dotenv";
// dotenv.config();

// const { URI, PORT, SECRET_ACCESS_TOKEN } = process.env;

// export { URI, PORT, SECRET_ACCESS_TOKEN };

const requiredEnvVariables = [
  "NODE_ENV",
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
  "JWT_KEY",
  "ALLOWED_ORIGINS",
];

checkEnvVariables(requiredEnvVariables);

const config = {
  nodeEnv: process.env.NODE_ENV as string,
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtKey: process.env.JWT_KEY as string,
  allowedOrigins: process.env.ALLOWED_ORIGINS as string,
};

// console.log("Config:", config);

export default config;
