import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from '@mui/material';
import CardsList from './components/CardsList/CardsList';

function App() {
  const [cards, setCards] = useState([
    {
        id: nanoid(),
        text: "This is my first title!",
        date: "12/04/2022",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        id: nanoid(),
        text: "This is my second title!",
        date: "28/06/2022",
        comment: "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    },
    {
        id: nanoid(),
        text: "This is my third title!",
        date: "21/07/2022",
        comment: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    },
    {
      id: nanoid(),
      text: "This is my third title!",
      date: "31/02/2022",
      comment: "recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: nanoid(),
      text: "This is my third title!",
      date: "31/02/2022",
      comment: "recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);

  const addCard = (text) => {
    const date = new Date();
    const newCard = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newCards = [...cards, newCard];
    setCards(newCards);
  }

  return (
      <Container maxWidth='xl' sx={{ marginRight: 'auto', marginLeft: 'auto', paddingRight: '15px', paddingLeft: '15px', backgroundColor: '#c9c9c9', height: '100vh', marginTop: '0' }}>
        <CardsList cards={cards} handleAddCard={addCard}/>
      </Container>
  );
}

export default App;
