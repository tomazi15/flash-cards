import { API_URL } from "./config";

const deleteCardApi = async (deckId: string, index: number) =>
  await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
    method: "DELETE",
  });

export default deleteCardApi;
