import React, { useState } from "react";

function Ternary() {
  const [isGoingOut, setIsGoingOut] = useState(true);

  function handleClick() {
    setIsGoingOut((pervState) => !pervState);
  }

  return (
    <div className='t-state'>
      <h1 className='t-state--title'>Do I feel like going out tonight?</h1>
      <div className='t-state--value' onClick={handleClick}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default Ternary;
