import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./Watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <Link className="link" to="/">
          <ArrowBackOutlined />
        </Link>
        Home
      </div>

      <iframe
        className="iframe"
        src="https://www.youtube.com/embed/8ugaeA-nMTc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
