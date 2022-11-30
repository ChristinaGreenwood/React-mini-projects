import React, { useState } from "react";

function Middle() {
  //   const thingsArray = ["Things 1", "Things 2"];
  const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

  function addItem() {
    setThingsArray((prevState) => {
      return [...prevState, `Thing ${prevState.length + 1}`];
    });
  }

  const thingsElement = thingsArray.map((el) => {
    // console.log(el);
    return <p key={el}>{el}</p>;
  });

  return (
    <div className='middle-button'>
      <h1>Setting state and on click listeners</h1>
      <button className='big-button' onClick={addItem}>
        Add Items
      </button>
      {thingsElement}
    </div>
  );
}

export default Middle;
