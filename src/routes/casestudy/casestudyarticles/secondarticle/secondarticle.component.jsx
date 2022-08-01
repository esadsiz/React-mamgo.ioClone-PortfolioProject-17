import "./secondarticle.styles.scss";

const SecondArticleCaseStudy = ({ secondArticleCaseStudyProps }) => {
  return (
    <div className="secondarticlecs">
      <div className="secondarticlecs-imageandslogan">
        <img
          className="secondarticlecs-imageandslogan-image"
          src={secondArticleCaseStudyProps.cardimage}
          alt="resim1"
        />
        <div className="secondarticlecs-imageandslogan">
          <h1 className="secondarticlecs-imageandslogan-slogan">
            {secondArticleCaseStudyProps.slogan}
            <span className="secondarticlecs-imageandslogan-slogan-circle">
              {secondArticleCaseStudyProps.slogancircle}
            </span>
          </h1>
        </div>
      </div>
      <div className="secondarticlecs-description">
        <div className="secondarticlecs-description-1">
          <h5 className="secondarticlecs-description-1-title">
            {secondArticleCaseStudyProps.title}
          </h5>
          <p className="secondarticlecs-description-1-text">
            {secondArticleCaseStudyProps.text}
          </p>
        </div>
        <div className="secondarticlecs-description-2">
          <div className="secondarticlecs-description-2-1">
            <h5 className="secondarticlecs-description-2-1-title">
              {secondArticleCaseStudyProps.title2}
            </h5>
            <p className="secondarticlecs-description-2-1-text">
              {secondArticleCaseStudyProps.text2}
            </p>
          </div>
          <div className="secondarticlecs-description-2-2">
            <p className="secondarticlecs-description-2-2-text">
              {secondArticleCaseStudyProps.text3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondArticleCaseStudy;
