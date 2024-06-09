import React, { createContext, useState } from "react";
import "./global.css";
import RemoveSessionStorage from "./roughComponent/sessionStorage/RemoveSessionStorage";
import Parent from "./roughComponent/learnPropDrilling/Parent";

export let Context1 = createContext();
export let Context2 = createContext();

const App1 = () => {
  let [name, setName] = useState("roman");
  let [age, setAge] = useState("24");
  let [address, setAddress] = useState("");
  return (
    <div>
      {/* <Info name="Roman" address="Galkot" age={30} isMarried={false} />
      <College
        name="Soch College of IT"
        address="Ranipauwa, Pokhara"s
        affilation="Tribhuwan University (TU)"
      /> */}
      {/* <TernaryOperator /> */}
      {/* <BehaviourOfData
        name="Roman"
        age={24}
        isMarried={false}
        favFood={['momo', 'selroti']}
        fatherInfo={{ name: 'Lil', age: 56 }}
        html={<div>Hello Roman</div>}
      /> */}
      {/* <ButtonClick /> */}
      {/* <LearnUseState1 /> */}
      {/* <LearnUseState2 /> */}
      {/* <LearnCss /> */}
      {/* <ShowAndHide1 /> */}
      {/* <IncrementByChoice /> */}
      {/* <HandleImage /> */}
      {/* <LearnReactFragment /> */}
      {/* <LearnUseRef /> */}
      {/* <Key /> */}
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <Form3 /> */}
      {/* <FormikFrom /> */}
      {/* <FormikForm2 /> */}
      {/* <SetLocalStorage /> */}
      {/* <GetLocalStorage />
      <RemoveLocalStorage /> */}
      {/* <SetSessionStorage /> */}
      {/* <GetSessionStorage /> */}
      {/* <RemoveSessionStorage /> */}
      {/* <Parent name="Roman" /> */}
      {/* <Context1.Provider value={name}> */}
      <Context1.Provider
        value={{ name: name, age: age, setName: setName, setAge: setAge }}
      >
        <Context2.Provider value={{ address: "galkot" }}>
          <Parent />
        </Context2.Provider>
      </Context1.Provider>
    </div>
  );
};

export default App1;
/* 
PropsDrilling

Parent => name
||
Child
||
Grand Child

if we have a lots of child then we will have a bloatware
so the solution is
make store (vado)

send the name props to store
then get the props who needs from the store

*/

/* 
Create context => Context1
provide context => useContext(Context1)
add value to the context =>
     {
     name:'roman',
     age:'24',
     setName:setName,
     setAge: setAge
     }
get value from the context
value.age , value.name
change value form the context
*/
