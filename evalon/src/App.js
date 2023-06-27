// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 1, name: 'Card 1', image: 'card1.jpg', power: 10 },
    { id: 2, name: 'Card 2', image: 'card2.jpg', power: 8 },
    { id: 3, name: 'Card 3', image: 'card3.jpg', power: 12 },
    // Add more cards here
  ]);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Evalon</h1>
      </header>
      <main>
        <div className="card-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${selectedCard === card ? 'selected' : ''}`}
              onClick={() => handleCardClick(card)}
            >
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
              <p>Power: {card.power}</p>
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="selected-card">
            <img src={selectedCard.image} alt={selectedCard.name} />
            <h3>{selectedCard.name}</h3>
            <p>Power: {selectedCard.power}</p>
            <button onClick={() => setSelectedCard(null)}>Deselect</button>
          </div>
        )}
      </main>
      <footer className="app-footer">
        <p>© 2023 Evalon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
