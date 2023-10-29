import { config } from "dotenv";
config();
import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

import DeckModel from "./models/Deck";

const PORT = 5001;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/decks", async (req: Request, res: Response) => {
  const getDecks = await DeckModel.find();
  res.json(getDecks);
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new DeckModel({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
