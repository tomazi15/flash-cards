import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const deleteCardFromDeckController = async (
  req: Request,
  res: Response
) => {
  const { deckId, index } = req.params;
  const deck = await DeckModel.findById(deckId);

  if (!deck) return res.status(400).send("no deck of this id exists");

  deck.cards.splice(parseInt(index), 1);
  await deck.save();
  res.json(deck);
};
