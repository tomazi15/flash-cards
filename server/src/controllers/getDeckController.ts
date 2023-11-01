import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const getDeckController = async (req: Request, res: Response) => {
  const deckId = req.params.deckId;
  const deck = await DeckModel.findById(deckId);

  res.json(deck);
};
