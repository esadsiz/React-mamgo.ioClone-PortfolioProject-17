import FirstArticleCaseStudy from "./firstarticle/firstarticle.component";
import SecondArticleCaseStudy from "./secondarticle/secondarticle.component";
import ThirdArticleCaseStudy from "./thirdarticle/thirdarticle.component";
import FourthArticleCaseStudy from "./fourtharticle/fourtharticle.component";

const CaseStudyArticles = ({ caseStudyArticlesProps }) => {
  return (
    <div>
      <FirstArticleCaseStudy
        firstArticleCaseStudyProps={caseStudyArticlesProps.first}
      />
      <SecondArticleCaseStudy
        secondArticleCaseStudyProps={caseStudyArticlesProps.second}
      />
      <ThirdArticleCaseStudy
        thirdArticleCaseStudyProps={caseStudyArticlesProps.third}
      />
      <FourthArticleCaseStudy
        fourthArticleCaseStudyProps={caseStudyArticlesProps.fourth}
      />
    </div>
  );
};

export default CaseStudyArticles;
