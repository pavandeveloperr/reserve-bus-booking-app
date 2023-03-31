import { Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
