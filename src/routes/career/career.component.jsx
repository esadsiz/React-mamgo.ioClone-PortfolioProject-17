import FirstSectionCareer from "./firstsection/firstsection.component";
import JobPostingCareer from "./jobposting/jobposting.component";

const firstSectionCareerObj = {
  slogan: "We love what we do.",

  text: "Impressive ideas should never fail for lack of good colleagues. We generate the best recruiters for our clients and that only works with a damn strong team behind it. Become part of something special, become part of the mamgo family.",
  cardimage:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/62750188e4d9c37e1cc20267_DSC01491-1066x1600.jpg",
};

const Career = () => {
  return (
    <div>
      <FirstSectionCareer firstSectionCareerProps={firstSectionCareerObj} />
      <JobPostingCareer />
      <JobPostingCareer />
    </div>
  );
};

export default Career;
