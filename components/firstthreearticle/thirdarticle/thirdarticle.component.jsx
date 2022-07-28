import "./thirdarticle.styles.scss";

const ThirdArticle = ({ thirdArticleProps }) => {
  return (
    <div className="thirdarticle">
      <div className="thirdarticle-article">
        <h1 className="thirdarticle-article-slogan">
          {thirdArticleProps.slogan}
          <span className="thirdarticle-article-slogan-circle">
            {thirdArticleProps.slogancircle}
          </span>
        </h1>
        <div className="thirdarticle-article-description">
          <h5 className="thirdarticle-article-description-title">
            {thirdArticleProps.title}
          </h5>
          <p className="thirdarticle-article-description-text">
            {thirdArticleProps.text1}
            <br />
            <br />
            <p className="thirdarticle-article-description-text-theboldone">
              {thirdArticleProps.textstrong}
            </p>
            {thirdArticleProps.text2}
          </p>
        </div>
      </div>
      <div className="thirdarticle-imageacard">
        <img
          className="thirdarticle-imagecard-image"
          src={thirdArticleProps.cardimage}
          alt="resim1"
        />
      </div>
    </div>
  );
};

export default ThirdArticle;
