import React, { useState } from "react";
import { countryOptions, genderOptions } from "../config/config";

const Form2 = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [isMarried, setIsMarried] = useState(false);
  let [country, setCountry] = useState("nepal");
  let [gender, setGender] = useState("");

  const handleSumit = function (e) {
    e.preventDefault();
    let data = {
      fName: firstName,
      lName: lastName,
      pNumber: phoneNumber,
      email: email,
      password: password,
      dob: dob,
      isMarried: isMarried,
      country: country,
      gender: gender,
    };
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSumit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="dob">DoB</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="isMarried">isMarried</label>
          <input
            id="isMarried"
            type="checkbox"
            checked={isMarried}
            onChange={(e) => setIsMarried(e.target.checked)}
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {countryOptions.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Gender </label>
          {genderOptions.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  value={item.value}
                  checked={gender === item.value}
                  onChange={(e) => setGender(e.target.value)}
                />
              </span>
            );
          })}
          {/* <input
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label>Male</label>
          <input
            type="radio"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <label>Female</label> */}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form2;

/**
select and radio
   must have option value
   try to give default value
  
 all          value      e.target.value
 checkbox     checked    e.target.checked
 radio        checked    e.target.value
 */
