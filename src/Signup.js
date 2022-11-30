import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    okayToEmail: true,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.verifyPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }
    if (formData.okayToEmail) {
      console.log("Thanks for signing up for our newsletter");
    }
  }

  return (
    <div className='body-div'>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email address'
            className='form--input'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            className='form--input'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Confirm password'
            className='form--input'
            name='verifyPassword'
            value={formData.verifyPassword}
            onChange={handleChange}
          />

          <div className='form--marketing'>
            <input
              id='okayToEmail'
              type='checkbox'
              name='okayToEmail'
              checked={formData.okayToEmail}
              onChange={handleChange}
            />
            <label htmlFor='okayToEmail'>I want to join the newsletter</label>
          </div>
          <button className='form--submit'>Sign up</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
