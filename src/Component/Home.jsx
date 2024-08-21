import { useState } from "react";

useState
const Home = () => {
  const [someState, setSomeState]=useState(false)
  return (
    <div>
      <h1
        onMouseEnter={() => setSomeState(!someState)}
        onMouseOut={() => setSomeState(false)}
      >
        Home Page
      </h1>
      <p>Welcome to the home page!</p>
      {someState && <p>This is hiden paragraph</p>}
    </div>
  );
};

export default Home;
