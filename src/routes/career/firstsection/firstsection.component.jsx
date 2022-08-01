import "./firstsection.styles.scss";

const FirstSectionCareer = ({ firstSectionCareerProps }) => {
  return (
    <div className="firstsection">
      <div className="firstsection-article">
        <h1 className="firstsection-article-slogan">
          {firstSectionCareerProps.slogan}
        </h1>
        <div className="firstsection-article-description">
          <p className="firstsection-article-description-text">
            {firstSectionCareerProps.text}
          </p>
        </div>
      </div>
      <div className="firstsection-imageandslogancard">
        <img
          className="firstsection-imageandslogancard-image"
          src={firstSectionCareerProps.cardimage}
          alt="resim10"
        />
      </div>
    </div>
  );
};

export default FirstSectionCareer;
