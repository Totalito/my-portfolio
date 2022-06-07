import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contactame en:</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/channel/UCPUvsOn770WbcMw2syCPV_A"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            Youtube<span>Gonza Moreira</span>
          </h2>
        </a>

        <a
          href="https://wa.me/+5493754412696/"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Whatsapp <span>+54 9 3754 412696 </span>
          </h2>
        </a>

        <a href="https://www.instagram.com/gonza.moreiraa/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            Instagram <span>gonza.moreira</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;