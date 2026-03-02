import { useEffect, useState } from 'react';
import './App.css';
import LetterForm from './component/LetterForm'; 
import LetterList from './component/LetterList';

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log("App mounted");
  }, []);

  useEffect(() => {
    console.log("Letter updated:", letters);
  }, [letters]);

  const addLetter = (content) => {
    setLetters([
      ...letters,
      {
        id: Date.now(),
        content,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>My Letters</h1>
      <LetterForm onAdd={addLetter} />
      <LetterList letters={letters} />
    </div>
  );
}

export default App;