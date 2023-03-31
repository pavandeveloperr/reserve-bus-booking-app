import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/Homepage";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
