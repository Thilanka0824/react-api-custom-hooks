import React, {useState} from "react";
import "./App.css";
import useAPI from "./hooks/useAPI";
import useInput from "./hooks/useInput";



function App() {
  // console.log(useAPI('users',2));
  const [query, setQuery] = useState('query')
  //custom Hook for input
  const route = useInput("route");
  const id = useInput("id");

  let API = useAPI(route.value, id.value);
  let name = useAPI(route.value, id.value).name

  return (
    <div className="App App-header">
      <h1>Custom API Hooks</h1>
      Route:
      <input {...route} />
      Id: <input {...id} />
      <p>Name:{name}</p>
      <p>
      Title: {API.title}</p>
      <p>------------------------------</p>
     
    </div>
  );
}

export default App;
