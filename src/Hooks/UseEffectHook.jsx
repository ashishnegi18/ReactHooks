// import { useState, useEffect } from "react";

// const UseEffectHook = () => {
//   const [jokes, setJokes] = useState("");
// function GetRandomJokes(){

//     useEffect(() => {
//         console.log("This runs after the first render");
        
//         fetch("https://v2.jokeapi.dev/joke/Any")
//         .then((response) => response.json())
//         .then((data) => {
//             if (data.type === "single") {
//                 setJokes(data.joke);
//             } else if (data.type === "twopart") {
//                 setJokes(`${data.setup} - ${data.delivery}`);
//             }
//         })
//         .catch((error) => console.error("Error fetching the joke:", error));
//     }, []); // Empty array ensures this runs only once after the initial render
    
// }
//   return (
//     <>
//       <h1>useEffect hook</h1>
//       <button onClick={GetRandomJokes}>GetRandomJokes</button>
//       <div>{jokes}</div>
//     </>
//   );
// };

// export default UseEffectHook;


import { useState } from "react";

const UseEffectHook = () => {
  const [jokes, setJokes] = useState("");

  function GetRandomJokes() {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          setJokes(data.joke);
        } else if (data.type === "twopart") {
          setJokes(`${data.setup} - ${data.delivery}`);
        }
      })
      .catch((error) => console.error("Error fetching the joke:", error));
  }

  return (
    <>
      <h1>useEffect hook</h1>
      <button onClick={GetRandomJokes}>Get Random Jokes</button>
      <div>{jokes}</div>
    </>
  );
};

export default UseEffectHook;
