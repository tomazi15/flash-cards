import { API_URL } from "./config";
import { TDeck } from "./getDecksApi";

export const createCardApi = async (
  deckId: string,
  text: string
): Promise<TDeck> => {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    body: JSON.stringify({ text }),
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};

export default createCardApi;
