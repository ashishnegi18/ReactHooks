import UseStateHook from "./Hooks/UseStateHook";
import UseEffectHook from "./Hooks/UseEffectHook";
import FormHandling from "./Formhandling/FormHandling";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Hook1" element={<UseStateHook />} />
          <Route path="/Hook2" element={<UseEffectHook />} />
          <Route path="/Form" element={<FormHandling />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
