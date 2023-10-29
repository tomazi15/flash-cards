import { API_URL } from "./config";

const deleteDeckApi = async (id: string) =>
  await fetch(`${API_URL}/decks/${id}`, {
    method: "DELETE",
  });

export default deleteDeckApi;
