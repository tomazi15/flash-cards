import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const createCardForDeckController = async (
  req: Request,
  res: Response
) => {
  const deckId = req.params.deckId;
  const deck = await DeckModel.findById(deckId);
  const { text } = req.body;

  if (!deck) return res.status(400).send("no deck of this id exists");

  deck.cards.push(text);
  await deck.save();

  res.json(deck);
};
