import { config } from "dotenv";
config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";
import { deleteDeckController } from "./controllers/deleteDeckController";
import { createCardForDeckController } from "./controllers/createCardForDeckController";
import { getDeckController } from "./controllers/getDeckController";
import { deleteCardFromDeckController } from "./controllers/deleteCardFromDeckController";

const PORT = 5001;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Decks routes
app.get("/decks", getDecksController);
app.get("/decks/:deckId", getDeckController);
app.post("/decks", createDeckController);
app.delete("/decks/:deckId", deleteDeckController);

// Card routes
app.post("/decks/:deckId/cards", createCardForDeckController);
app.delete("/decks/:deckId/cards/:index", deleteCardFromDeckController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
