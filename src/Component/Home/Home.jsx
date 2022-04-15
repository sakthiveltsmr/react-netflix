import { Navbar } from "../Navbar/Navbar";
import "./Home.scss";
import Features from "../Features/Features";
import Register from "../../Pages/Register/Register";
import List from "../List/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features />
      <List />
      <List />
      <Register />
    </div>
  );
};

export default Home;
