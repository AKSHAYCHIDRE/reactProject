import BirthdayList from "./birthdayList/birthdayList";
import birthdayList from "./birthdayList/data";

import { useState } from "react";

function App() {
  const [people, setPeople] = useState(birthdayList);

  return (
    <div className="app">
      <div className="birthdayCardList">
        <h2 className="sectionTitle">
          {people.length} Birthday's Today
        </h2>
        {people.map((person) => {
          return (
            <>
              <BirthdayList
                id={person.id}
                key={person.id}
                name={person.name}
                age={person.age}
                image={person.image}
              />
            </>
          );
        })}
        <button className="clearAllButton" onClick={()=> setPeople([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
