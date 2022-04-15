import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Register />
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
