import React from 'react';
import Card from '../Card/Card';
import './CardsList.css';
import AddCard from '../AddCard/AddCard';

const cardsList = ({ cards, handleAddCard, handleDeleteCard }) => {
  return (
    <div className='CardsList'>
        {cards.map((card)=> (
            <Card 
            id={card.id} 
            title={card.title} 
            date={card.date} 
            text={card.text} 
            handleDeleteCard={handleDeleteCard}
            />
        ))}  
        <AddCard handleAddCard={handleAddCard}/> 
    </div>
  );
};

export default cardsList;