import { API_URL } from "./config";

export type TDeck = {
  _id: string;
  title: string;
  cards: [];
};

const getDeckApi = async (deckId: string): Promise<TDeck> =>
  await fetch(`${API_URL}/decks/${deckId}`).then((response) => response.json());

export default getDeckApi;
