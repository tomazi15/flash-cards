import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { createDeckApi, getDecksApi, deleteDeckApi } from "./api";
import { TDeck } from "./api/getDecksApi";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const createDeck = await createDeckApi(title);
    setDecks([...decks, createDeck]);

    setTitle("");
  };

  const handleDeleteDeck = async (id: string) => {
    deleteDeckApi(id);
    setDecks(decks.filter((deck) => deck._id !== id));
  };

  useEffect(() => {
    (async () => {
      const newDecks = await getDecksApi();
      setDecks(newDecks);
    })();
  }, []);

  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>
            <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
