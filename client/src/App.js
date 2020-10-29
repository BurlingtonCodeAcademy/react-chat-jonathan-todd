import React from "react";
import Main from "./MainRoom"
import PostForm from "./PostForm"
import './App.css';
//import more room components like line 2
//install & import react-router-dom

function App() {
  
  return (
    <div className="App">
      <Main></Main>
      <PostForm></PostForm>
    </div>
  );
}

export default App;
