import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Más sobre mi
      </a>
      <a href="#contact" className="btn sec">
        Contacto
      </a>
    </div>
  );
}

export default Buttons;