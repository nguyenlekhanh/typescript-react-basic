import React from 'react';
import './App.css';

function App() {

  //1 type definition
  const name: string = "Pedro";
  const age: number = 20;
  const isMarried: boolean = false;

  const getName = (name: string): number => {   //or return void
    if(name === "Pedro") {
      return 20;
    } else {
      return 0;
    }
  }


  return (
    <div className="App">
      {name}
      {age}
      {isMarried};
    </div>
  );
}

export default App;
