import React, { useState, useEffect } from "react";
import createCardApi from "../../api/createCardApi";
import { useParams } from "react-router-dom";
import getDeckApi from "../../api/getDeckApi";
import { TDeck } from "../../api/getDecksApi";
import deleteCardApi from "../../api/deleteCardApi";

export const Deck = () => {
  const [text, setText] = useState("");
  const [cards, setCards] = useState<string[]>([]);
  const [deck, setDeck] = useState<TDeck>([]);

  const { deckId } = useParams();

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const { cards: serverCards } = await createCardApi(deckId!, text);
    setCards(serverCards);

    setText("");
  };

  const handleDeleteCard = async (index: number) => {
    deleteCardApi(deckId!, index);
    // setCards([...cards.splice(index, 1)]);
  };

  useEffect(() => {
    (async () => {
      if (!deckId) return;
      const deck = await getDeckApi(deckId!);
      setDeck(deck);
      setCards(deck.cards);
    })();
  }, [deckId]);

  return (
    <div className="App">
      <ul className="decks">
        {cards.map((card, index) => (
          <li key={index}>
            <button onClick={() => handleDeleteCard(index)}>X</button>
            {card}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Create Card</label>
        <input
          id="deck-title"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button>Card Text</button>
      </form>
    </div>
  );
};
