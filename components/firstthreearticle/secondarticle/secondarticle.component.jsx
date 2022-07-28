import "./secondarticle.styles.scss";

const SecondArticle = ({ secondArticleProps }) => {
  return (
    <div className="secondarticle">
      <div className="secondarticle-imageandcalluscard">
        <img
          className="secondarticle-imageandcalluscard-image"
          src={secondArticleProps.cardimage}
          alt="resim1"
        />

        <div className="secondarticle-imageandcalluscard-calluscard">
          <h3 className="secondarticle-imageandcalluscard-calluscard-slogan">
            {secondArticleProps.cardslogan}
          </h3>
          <hr className="secondarticle-imageandcalluscard-calluscard-hr" />
          <h4 className="secondarticle-imageandcalluscard-calluscard-slogan">
            <span className="secondarticle-imageandcalluscard-calluscard-slogan-callus">
              {secondArticleProps.callus}
            </span>
            <br />
            <span> {secondArticleProps.mobilenumber}</span> <br />
            <span className="secondarticle-imageandcalluscard-calluscard-slogan-callus">
              {secondArticleProps.click}
            </span>
          </h4>
          <div className="secondarticle-imageandcalluscard-calluscard-button">
            <button className="secondarticle-imageandcalluscard-calluscard-button-self">
              {secondArticleProps.buttontext}
            </button>
          </div>
        </div>
      </div>
      <div className="secondarticle-article">
        <h1 className="secondarticle-article-slogan">
          {secondArticleProps.slogan}
          <span className="secondarticle-article-slogan-circle">
            {secondArticleProps.slogancircle}
          </span>
        </h1>
        <div className="secondarticle-article-description">
          <h5 className="secondarticle-article-description-title">
            {secondArticleProps.title}
          </h5>
          <p className="secondarticle-article-description-text">
            {secondArticleProps.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondArticle;
