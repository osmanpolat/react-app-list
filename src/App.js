import "./App.css";
import personList from "./personListData.js";
import PersonalList from "./PersonalList.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(personList);
  function clearButton() {
    setItems([]);
  }

  return (
    <>
      <div className="person-boxList">
        <div className="container">
          <h1 className="app-title">5 Birtdays Today</h1>
          {items.map((item) => (
            <PersonalList
              key={item.id}
              personalImage={item.image}
              personalName={item.name}
              personalAge={item.age}
            />
          ))}
          <div>
            <button className="clear-btn" onClick={clearButton}>
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
