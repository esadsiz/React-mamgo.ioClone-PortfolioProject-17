import "./fourtharticle.styles.scss";

const FourthArticleCaseStudy = ({ fourthArticleCaseStudyProps }) => {
  return (
    <div className="fourtharticlecs">
      <div className="fourtharticlecs-imageandslogancard">
        <img
          className="fourtharticlecs-imageandslogancard-image"
          src={fourthArticleCaseStudyProps.cardimage}
          alt="resim10"
        />
      </div>
      <div className="fourtharticlecs-article">
        <div className="fourtharticlecs-article-description">
          <h5 className="fourtharticlecs-article-description-title">
            {fourthArticleCaseStudyProps.title}
          </h5>
          <p className="fourtharticlecs-article-description-text">
            {fourthArticleCaseStudyProps.text1}
          </p>
          <p className="fourtharticlecs-article-description-text">
            {fourthArticleCaseStudyProps.text2}
          </p>
          <p className="fourtharticlecs-article-description-text">
            {fourthArticleCaseStudyProps.text3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthArticleCaseStudy;
