import React from "react";

export default function Main() {
  function handleClick() {
    console.log("hi there");
  }

  function handleHover() {
    console.log("Hover Successfully");
  }
  return (
    <div className='container'>
      <img src='https://picsum.photos/640/360' onClick={handleHover} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
