import express from "express";
import bodyParser from "body-parser";
import router from "./routes";
import config from "./config/config";
import connectToDB from "./config/db";

const app = express();
const port = config.port;

connectToDB().then(() => {
  console.log("Connected to DB...");
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});

