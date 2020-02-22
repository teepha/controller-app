import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
};

export default config;
