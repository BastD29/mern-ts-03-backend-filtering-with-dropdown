declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test" | "local" | "staging";
    PORT: string;
    MONGO_URI: string;
    JWT_SECRET: string;
    JWT_KEY: string;
    ALLOWED_ORIGINS: string;
  }
}
