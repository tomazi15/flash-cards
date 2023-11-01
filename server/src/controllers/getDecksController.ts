import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const getDecksController = async (req: Request, res: Response) => {
  const getDecks = await DeckModel.find();
  res.json(getDecks);
};
