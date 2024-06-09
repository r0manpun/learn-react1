import React, { useState } from "react";

// prettierignore
const countryOptions = [
  { label: "Nepal", value: "nepal" },
  { label: "China", value: "china" },
  { label: "India", value: "india" },
  { label: "America", value: "usa" },
];
// prettierignore
const radioOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
// prettierignore
const clothOptions = [
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" },
];

const Form3 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("Nepal");

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      _firstName: firstName,
      _lastName: lastName,
      _email: email,
      _password: password,
      _phoneNo: phoneNumber,
      _description: description,
      _isMarried: isMarried,
      _country: country,
      _gender: gender,
    };
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            id="phoneNo"
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="isMarried">isMarried</label>
          <input
            id="isMarried"
            type="checkbox"
            checked={isMarried}
            onChange={(e) => setIsMarried(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="country">Country </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {selectOptions.map((item, i) => {
              return (
                <option
                  key={i}
                  value={item.value}
                  /* disabled={true}*/
                >
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <div>
          <label>Gender</label>
          <div>
            {radioOptions.map((item, i) => {
              return (
                <span key={i}>
                  <label htmlFor={item.value}>{item.label}</label>
                  <input
                    id={item.value}
                    type="radio"
                    value={item.value}
                    checked={gender === item.value}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </span>
              );
            })}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form3;
