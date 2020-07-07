import React, {useState} from 'react';
import SearchBar from "./components/SearchBar"

function App() {
  const [state, setState] = usestate({
    s: "",
    results: [],
  });

  const API_KEY = process.env

  const handleInput = (e) => {
    let s = e.target.value;
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Movie Database
       </h1>
      </header>
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
