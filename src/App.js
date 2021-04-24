import Films from './components/Films'
import AddMovie from './components/AddMovie'
import './App.css';
import { useState } from 'react';

function App() {
  const [addFilm, setAddFilm] = useState(["Iron Man", "Thor", "Captain America"])

  const addAFilm = (film) => {
    setAddFilm([...addFilm, film])
    console.log(film)
    console.log(addFilm)
  }

  return (
    <div className="App">
      <Films filmAccess={addAFilm} filmArrayAccess={addFilm}/>
      <AddMovie addFilmAccess={addAFilm}/>
    </div>
  );
}

export default App;
