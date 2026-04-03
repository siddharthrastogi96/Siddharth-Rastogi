import { FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {

  const base = import.meta.env.BASE_URL;

  return (
    <div className="icons-section">

      <div className="social-icons">

        <span>
          <a
            href="https://www.linkedin.com"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </span>

        <span>
          <a
            href="https://archinect.com/people/cover/150523123/siddharth-rastogi"
            target="_blank"
          >
            <img
              src={`${base}images/archinect.png`}
              alt="Archinect"
              className="social-icon-img"
            />
          </a>
        </span>

        <span>
          <a
            href="https://heyzine.com/flip-book/55411cc796.html"
            target="_blank"
          >
            <img
              src={`${base}images/heyzine.png`}
              alt="Heyzine"
              className="social-icon-img"
            />
          </a>
        </span>

      </div>

      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>

    </div>
  );
};

export default SocialIcons;