import "./firstarticle.component.scss";

const FirstArticleCaseStudy = ({ firstArticleCaseStudyProps }) => {
  return (
    <div className="firstarticlecs">
      <div className="firstarticlecs-article">
        <h1 className="firstarticlecs-article-slogan">
          {firstArticleCaseStudyProps.sloganpart1}
          <span className="firstarticlecs-article-slogan-circle">
            {firstArticleCaseStudyProps.slogancircle}
          </span>
          <br />
          {firstArticleCaseStudyProps.sloganpart2}
        </h1>
        <div className="firstarticlecs-article-description">
          <h6 className="firstarticlecs-article-description-name">
            {firstArticleCaseStudyProps.name} <br />
            <span className="firstarticlecs-article-description-cofounder">
              {firstArticleCaseStudyProps.cofounder}
            </span>
          </h6>
          <h5 className="firstarticlecs-article-description-title">
            {firstArticleCaseStudyProps.title}
          </h5>

          <p className="firstarticlecs-article-description-text">
            <span>
              <a href="www.academicwork.de" target="_blank">
                {firstArticleCaseStudyProps.textlink}
              </a>
            </span>
            {firstArticleCaseStudyProps.text}
          </p>
        </div>
      </div>
      <div className="firstarticlecs-image">
        <img
          className="firstarticlecs-image-1"
          src={firstArticleCaseStudyProps.image.image1}
          alt="resim1"
        />

        <img
          className="firstarticlecs-image-2"
          src={firstArticleCaseStudyProps.image.image2}
          alt="resim2"
        />
      </div>
    </div>
  );
};

export default FirstArticleCaseStudy;
