import { useState } from "react";
import "./App.css";
import { CardProfile } from "./CardProfile";
import Game from "./Game";
import { ToDoList } from "./ToDoList";
function App() {
  return (
    <div className="app">
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
