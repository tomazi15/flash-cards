import { API_URL } from "./config";

export type TDeck = {
  _id: string;
  title: string;
  cards: [];
};

const getDecksApi = async (): Promise<TDeck[]> =>
  await fetch(`${API_URL}/decks`).then((response) => response.json());

export default getDecksApi;
