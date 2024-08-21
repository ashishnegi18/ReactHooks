import { useState } from "react";

const FormHandling = () => {
  const [Username, setUsername] = useState("");
  const [Data, setData] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData(true);
  };

  return (
    <div>
      <h1>FormHandling</h1>
      {Data && <h1>Welcome {Username}</h1>}
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormHandling;
