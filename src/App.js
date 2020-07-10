import React, { useState } from 'react';
import axios from "axios";
require('dotenv').config()
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const API_URL = process.env.API_URL;

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
       <h1>
         Movie Database
       </h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search={search}/>
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
