import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Eso es todo{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - Desplazarse hacia arriba -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.instagram.com/gonza.moreiraa/">
          <BsInstagram className="social" />
        </a>
        <a href="https://www.facebook.com/gonzalo.moreira.3344/">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="https://www.youtube.com/channel/UCPUvsOn770WbcMw2syCPV_A">
          <TiSocialYoutube className="social" />
        </a>

        <a href="https://github.com/Totalito">
          <TiSocialGithub className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;