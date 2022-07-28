import "./fiftharticle.styles.scss";

const FifthArticle = ({ fifthArticleProps }) => {
  return (
    <div className="fiftharticle">
      <div className="fiftharticle-imageandslogancard">
        <img
          className="fiftharticle-imageandslogancard-image"
          src={fifthArticleProps.cardimage}
          alt="resim10"
        />
        <div className="fiftharticle-imageandslogancard-slogancard">
          <h3 className="fiftharticle-imageandslogancard-slogancard-slogan">
            {fifthArticleProps.cardslogan}
          </h3>
        </div>
      </div>
      <div className="fiftharticle-article">
        <h1 className="fiftharticle-article-slogan">
          <span className="fiftharticle-article-slogan-circle">
            {fifthArticleProps.slogancircle}
          </span>
          {fifthArticleProps.slogan}
        </h1>
        <div className="fiftharticle-article-description">
          <h5 className="fiftharticle-article-description-title">
            {fifthArticleProps.title}
          </h5>
          <p className="fiftharticle-article-description-text">
            {fifthArticleProps.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthArticle;
