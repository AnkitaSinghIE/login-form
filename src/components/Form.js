import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }
  return (
    <form onSubmit={handleClick} className="form">
     <h1>Hello {headingText}</h1>
      <input 
       onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}/>
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button
        type="submit"
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
