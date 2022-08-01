import "./thirdarticle.styles.scss";

const ThirdArticleCaseStudy = ({ thirdArticleCaseStudyProps }) => {
  return (
    <div className="thirdarticlecs">
      <div className="thirdarticlecs-article">
        <div className="thirdarticlecs-article-description">
          <h5 className="thirdarticlecs-article-description-title">
            {thirdArticleCaseStudyProps.title}
          </h5>
          <p className="thirdarticlecs-article-description-text">
            {thirdArticleCaseStudyProps.text1}
          </p>
          <p className="thirdarticlecs-article-description-text">
            {thirdArticleCaseStudyProps.text2}
          </p>
        </div>
      </div>
      <div className="thirdarticlecs-imageandslogancard">
        <img
          className="thirdarticlecs-imageandslogancard-image"
          src={thirdArticleCaseStudyProps.cardimage}
          alt="resim10"
        />
      </div>
    </div>
  );
};

export default ThirdArticleCaseStudy;
