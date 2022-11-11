import React from "react";
import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  /* console.log('Consolar people',people);
  console.log("Consolar lenght of people: ",people.length);
  console.log(setPeople); */

  const showHide = () => {
    //let containers = document.querySelector('.sectionContainer');
    let btnClearAll = document.querySelector('.btn');
    let btn2= document.querySelector('.btn2');

    setPeople([]);
    btnClearAll.style.display = "none";
    btn2.style.display = 'block';

    
  }

  const reloadAgain = () => {
    console.log('reload clicked');
    
      window.location.reload();
  }

  //lägga till tuggle function on click med remove all, bring back
  return (
    <div className="container">
      <h1>Birthday Reminder</h1>
      <section className="sectionContainer">
        <h3>{people.length} birthdays today</h3>
        < List people={people}/>
        <button className="btn" onClick={showHide}>Clear all</button>
        <button className="btn btn2" onClick={reloadAgain}>Reload</button>
      </section>
    </div>
  )
}

export default App;
