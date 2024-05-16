import React from 'react';

const BehaviourOfData = ({
  name,
  age,
  isMarried,
  favFood,
  fatherInfo,
  html,
}) => {
  return (
    <div>
      {name}
      <br />
      {age}
      <br />
      {isMarried ? 'yes' : 'no'}
      <br />
      {favFood}
      <br />
      {fatherInfo.name}
      <br />
      {fatherInfo.age}
      {html}
    </div>
  );
};

export default BehaviourOfData;
