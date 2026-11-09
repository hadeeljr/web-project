
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing-temp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About-temp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


