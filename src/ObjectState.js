import React, { useState } from "react";
import Star from "./Star";

function ObjectState() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  // let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <div className='object-state'>
      <article className='card'>
        <img src='/user.png' className='card--image' />
        <div className='card--info'>
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          {/* <img
            src={`/${starIcon}`}
            className='card--favorite'
            onClick={toggleFavorite}
          /> */}
          <h2 className='card--name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='card--contact'>{contact.phone}</p>
          <p className='card--contact'>{contact.email}</p>
        </div>
      </article>
    </div>
  );
}

export default ObjectState;
