import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          const current = e.currentTarget as HTMLAnchorElement;
          const section = current.getAttribute("data-href");

          if (section) {
            const target = document.querySelector(section);

            if (target) {
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }
      });
    });

    return () => {};
  }, []);

  return (
    <>
      <div className="header">

        <a
          href={`${base}#`}
          className="navbar-title"
          data-cursor="disable"
        >
          <img
            src={`${base}images/logo.png`}
            alt="Logo"
            className="logo-img"
          />
        </a>

        <a
          href="mailto:siddharthrastogi221@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          siddharthrastogi221@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Navbar;