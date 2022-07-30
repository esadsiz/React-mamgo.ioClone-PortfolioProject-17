import "./threecardsection.component.scss";

const ThreeCardSection = ({ CardItselfProps }) => {
  return (
    <div className="scrollsection">
      <div className="scrollsection-logoandtitle">
        <img
          className="scrollsection-logoandtitle-logo"
          src={CardItselfProps.logo}
          alt=""
        />
        <h1 className="scrollsection-logoandtitle-title">
          {CardItselfProps.title}
        </h1>
      </div>
      <p className="scrollsection-description">{CardItselfProps.description}</p>
    </div>
  );
};

export default ThreeCardSection;
