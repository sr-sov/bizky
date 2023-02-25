import React from "react";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <>
    <ToDoForm />
    <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
    </>
  )
}

export default App;
