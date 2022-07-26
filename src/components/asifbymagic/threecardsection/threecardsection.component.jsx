import "./threecardsection.component.scss";

const ThreeCardSection = ({ CardItselfProps }) => {
  return (
    <div className="scrollsection">
      <img className="scrollsection-logo" src={CardItselfProps.logo} alt="" />
      <h1 className="scrollsection-title">{CardItselfProps.title}</h1>
      <p className="scrollsection-description">{CardItselfProps.description}</p>
    </div>
  );
};

export default ThreeCardSection;
