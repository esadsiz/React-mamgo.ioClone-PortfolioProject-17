import "./casestudyheader.styles.scss";

const CaseStudyHeader = ({ caseStudyHeaderProps }) => {
  return (
    <header className="casestudyheader">
      <div className="casestudyheader-header">
        <div className="casestudyheader-header-elements">
          <h2 className="casestudyheader-header-elements-firsttitle">
            {caseStudyHeaderProps.firsttitle}
          </h2>
          <h1 className="casestudyheader-header-elements-slogan">
            {caseStudyHeaderProps.slogan}
            <br />
          </h1>
          <h6 className="casestudyheader-header-elements-description">
            {caseStudyHeaderProps.description}
          </h6>
          <br />
          <br />
          <h6 className="casestudyheader-header-elements-description2">
            {caseStudyHeaderProps.description2}
          </h6>
          <h6 className="casestudyheader-header-elements-sign">
            {caseStudyHeaderProps.sign}
          </h6>
          <img
            className="casestudyheader-header-elements-logo"
            src={caseStudyHeaderProps.logolink}
            alt="logo"
          />
        </div>
      </div>
      <img
        className="casestudyheader-video"
        src={caseStudyHeaderProps.imagelink}
        alt="casestudyheaderimg"
      />
    </header>
  );
};

export default CaseStudyHeader;
