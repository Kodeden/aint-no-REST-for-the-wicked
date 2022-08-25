import bodyParser from "body-parser";
import express from 'express';

function createServer() {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(bodyParser.json());

  return app;
}

export default createServer;