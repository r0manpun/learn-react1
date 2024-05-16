const TernaryOperator = () => {
  //   let age = 18;
  //   let isMarried = false;
  let gender = null;

  //   let output = age >= 18 ? 'he can enter bar' : ' he cannot enter bar';
  //   let output = `your age is ${
  //     age === 16 ? 16 : age === 17 ? 17 : age === 18 ? 18 : 'neither 16, 17, 18'
  //   }`;
  //   let output = isMarried ? 'he is married' : 'he is not married';
  //   let output = isMarried ? 'he is married' : null;
  let output =
    gender === 'male'
      ? 'he is male'
      : gender === 'female'
      ? 'she is female'
      : 'they are other';
  console.log(output);
  return <div>TernaryOperator</div>;
};

export default TernaryOperator;
