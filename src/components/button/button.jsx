import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Aprende más
      </a>
      <a href="#contact" className="btn sec">
        Ponerse en contacto
      </a>
    </div>
  );
}

export default Buttons;