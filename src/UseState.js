import React, { useState } from "react";

function UseState() {
  const [isImportant, setIsImportant] = useState("Yes");
  //   console.log(isImportant);

  function handleClick() {
    setIsImportant("yes!");
  }

  return (
    <div className='usestate'>
      <h1 className='state-title'>Is State important to know?</h1>
      <div className='state-value' onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}

export default UseState;
