import React from "react";

function State() {
  function greeting(name) {
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    if (hours >= 4 && hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
    } else if (hours >= 17 && hours < 20) {
      timeOfDay = "Evening";
    } else {
      timeOfDay = "Night";
    }

    return `🤚  Good ${timeOfDay}, ${name}!  ❤️`;
  }

  return (
    <div className='state'>
      <h1>{greeting("Christina")}</h1>
    </div>
  );
}

export default State;
