import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const handleChange = () => {
    //   setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
    // };
    // setPerson("shakeAndBake");
    // setPerson({ name: "Prajwol" });
    setPerson({ ...person, name: "Prajwol" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button type='button' className='btn' onClick={handleChange}>
        Show john
      </button>
    </>
  );
};

export default UseStateObject;
