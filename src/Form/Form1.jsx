import React from "react";

const Form1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <br></br>
        <input type="password"></input>
        <br></br>
        <input type="email"></input>
        <br></br>
        <input type="number"></input>
        <br></br>
        <input type="date"></input>
        <br></br>
        <input type="time"></input>
        <br></br>
        <input type="color"></input>
        <br></br>

        <input type="file"></input>

        <textarea></textarea>
        <br></br>
        <input type="checkbox"></input>
        <br></br>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
        <br></br>

        <select>
          <option>Nepal</option>
          <option>China</option>
          <option>India</option>
          <option>Other</option>
        </select>
        <br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form1;
