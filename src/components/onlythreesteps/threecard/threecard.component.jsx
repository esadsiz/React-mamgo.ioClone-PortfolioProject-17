import "./threecard.component.scss";

const ThreeCard = ({ threeCardProps }) => {
  return (
    <div className="threecardcomp">
      <div className="threecardcomp-logoandtitle">
        <img
          className="threecardcomp-logoandtitle-logo"
          src={threeCardProps.logo}
          alt="cardlogo"
        />
        <h2 className="threecardcomp-logoandtitle-title">
          {threeCardProps.title}
        </h2>
      </div>
      <div className="threecardcomp-hr" />
      <p className="threecardcomp-description">{threeCardProps.description}</p>
    </div>
  );
};

export default ThreeCard;
