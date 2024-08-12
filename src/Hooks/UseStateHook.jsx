import { useState } from "react";

const UseStateHook = () => {
  // Define the arrays with actual values
  let summer = ["t-shirt"];
  let winter = ["fulltshirt", "shoes"];
  let rainy = ["raincoat", "plastic-cover"];

  const [currentArray, setCurrentArray] = useState([]);

  function CallSummer() {
    setCurrentArray(summer);
  }

  function CallWinter() {
    setCurrentArray(winter);
  }

  function CallRainy() {
    setCurrentArray(rainy);
  }

  return (
    <>
      <button onClick={CallSummer}>Summer</button>
      <button onClick={CallWinter}>Winter</button>
      <button onClick={CallRainy}>Rainy</button>

      {/* <ul style={{ listStyle: "none" }}>
        {currentArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <table style={{ border: "2px solid black" }}>
        <th style={{ border: "2px solid black" }}></th>
        {currentArray.map((item, index) => (
          <tr key={index}>{item}</tr>
        ))}
      </table>
    </>
  );
};

export default UseStateHook;
