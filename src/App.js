import React, {useState} from 'react';
import SearchBar from "./components/SearchBar";
import Axios from "axios";

function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1f6e52bc";

  const search = (e) => {
    if (e.key === "Enter"){
      Axios(API_URL + "&s=" + state.s).then(({data}) => {
        console.log(data);
      });

    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

   setState(prevState => {
     return { ...prevState, s: s }
   })

    console.log(state.s);
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1>
         Movie Database
       </h1>
      </header>
      <main>
        <SearchBar handleInput={handleInput} search= {search}/>
      </main>
    </div>
  );
}

export default App;
