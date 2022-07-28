import "./firstarticle.component.scss";

const FirstArticle = ({ firstArticleProps }) => {
  return (
    <div className="firstarticle">
      <div className="firstarticle-article">
        <h1 className="firstarticle-article-slogan">
          {firstArticleProps.sloganpart1}
          <span className="firstarticle-article-slogan-circle">
            {firstArticleProps.slogancircle}
          </span>
          <br />
          {firstArticleProps.sloganpart2}
        </h1>
        <div className="firstarticle-article-description">
          <h6 className="firstarticle-article-description-name">
            {firstArticleProps.name} <br />
            <span className="firstarticle-article-description-cofounder">
              {firstArticleProps.cofounder}
            </span>
          </h6>
          <h5 className="firstarticle-article-description-title">
            {firstArticleProps.title}
          </h5>
          <p className="firstarticle-article-description-text">
            {firstArticleProps.text}
          </p>
        </div>
      </div>
      <div className="firstarticle-image">
        <img
          className="firstarticle-image-1"
          src={firstArticleProps.image.image1}
          alt="resim1"
        />

        <img
          className="firstarticle-image-2"
          src={firstArticleProps.image.image2}
          alt="resim2"
        />
      </div>
    </div>
  );
};

export default FirstArticle;
