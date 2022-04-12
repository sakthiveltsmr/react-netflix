import { Navbar } from "../Navbar/Navbar";
import "./Home.scss";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Features type="Movies" />
    </div>
  );
};

export default Home;
