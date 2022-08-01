import CaseStudyHeader from "./casestudyheader/casestudyheader.component";
import CaseStudyArticles from "./casestudyarticles/casestudyarticles.component";

const CaseStudy = ({ csLanguageProps }) => {
  return (
    <div>
      <CaseStudyHeader
        caseStudyHeaderProps={csLanguageProps.caseStudyHeaderObj}
      />
      <CaseStudyArticles
        caseStudyArticlesProps={csLanguageProps.caseStudyArticlesObj}
      />
    </div>
  );
};

export default CaseStudy;
