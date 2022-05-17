import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">Mis especialidades</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>Html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>CSS</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javaScript</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>React</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;