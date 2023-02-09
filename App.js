import { StatusBar } from 'expo-status-bar';
import './styling.css'
import React, {useState} from 'react';
import FlashcardlList from './FlashcardList'

export default function App() {
  const [cards, setCards] = useState(TEST_LIST)
  return (
    <FlashcardlList flashcards={cards} />
  );
}


const TEST_LIST = 
[
{
  id:1,
  question:"Le chien",
  answer:"The dog"
},
{
  id:2,
  question:"Le chat",
  answer:"The cat"
},
{
  id:3,
  question:"Le maison",
  answer:"The house"
}
]


