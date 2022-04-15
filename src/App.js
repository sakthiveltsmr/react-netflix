import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";

import Login from "./Pages/Login/Login";
import Watch from "./Pages/Watch/Watch";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
