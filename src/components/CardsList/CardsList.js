import React from 'react';
import Card from '../Card/Card';
import './CardsList.css';
import AddCard from '../AddCard/AddCard';

const cardsList = ({ cards, handleAddCard }) => {
  return (
    <div className='CardsList'>
        {cards.map((card)=> (
            <Card id={card.id} text={card.text} date={card.date} comment={card.comment} />
        ))}  
        <AddCard handleAddCard={handleAddCard}/>
    </div>
  );
};

export default cardsList;