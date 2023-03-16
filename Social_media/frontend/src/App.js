import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Home from "./pages/Home.js";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/not_found" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
