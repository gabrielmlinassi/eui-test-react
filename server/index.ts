import { Request, Response } from "express";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req: Request, res: Response) => {
  res.send({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});