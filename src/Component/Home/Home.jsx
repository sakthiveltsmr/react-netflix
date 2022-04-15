import { Navbar } from "../Navbar/Navbar";
import "./Home.scss";
import Features from "../Features/Features";
import List from "../List/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features />
      <List />
    </div>
  );
};

export default Home;
