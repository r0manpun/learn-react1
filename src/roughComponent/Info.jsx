const Info = ({ name, address, age, isMarried }) => {
  return (
    <div>
      <p>My name is {name}</p>
      <p>I live in {address}</p>
      <p>My age is {age}</p>
      <p>isMarried: {isMarried ? 'yes' : 'no'}</p>
    </div>
  );
};

export default Info;
