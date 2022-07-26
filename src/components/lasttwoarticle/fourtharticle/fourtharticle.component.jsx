import "./fourtharticle.styles.scss";

const FourthArticle = ({ fourthArticleProps }) => {
  return (
    <div className="fourtharticle">
      <div className="fourtharticle-article">
        <h1 className="fourtharticle-article-slogan">
          {fourthArticleProps.slogan}
          <br />
          <span className="fourtharticle-article-slogan-circle">
            {fourthArticleProps.slogancircle}
          </span>
        </h1>
        <div className="fourtharticle-article-description">
          <h5 className="fourtharticle-article-description-title">
            {fourthArticleProps.title}
          </h5>
          <p className="fourtharticle-article-description-text">
            {fourthArticleProps.text}
          </p>
        </div>
      </div>
      <div className="fourtharticle-imageandslogancard">
        <img
          className="fourtharticle-imageandslogancard-image"
          src={fourthArticleProps.cardimage}
          alt="resim10"
        />
        <div className="fourtharticle-imageandslogancard-slogancard">
          <h3 className="fourtharticle-imageandslogancard-slogancard-slogan">
            {fourthArticleProps.cardslogan}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FourthArticle;
