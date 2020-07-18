import React, { useState } from 'react';
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";


function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1f6e52bc";

  const search = (e) => {
    if (e.key === "Enter"){
      axios(API_URL + "&s=" + state.s).then(({data}) => {
        console.log(data);
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })

      });

    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

   setState(prevState => {
     return { ...prevState, s: s }
   });

    // console.log(state.s);
  }

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <Navbar/>
        <SearchBar handleInput={handleInput} search={search}/>
        <Results results={state.results} />

      </main>
    </div>
  );
}

export default App;
