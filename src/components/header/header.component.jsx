import "./headerandvideo.styles.scss";

const Header = ({ headerProps }) => {
  return (
    <header className="headerandvideo">
      <div className="headerandvideo-header">
        <div className="headerandvideo-header-elements">
          <h2 className="headerandvideo-header-elements-firsttitle">
            {headerProps.firsttitle}
          </h2>
          <h1 className="headerandvideo-header-elements-slogan">
            {headerProps.slogan}
            <br />
            <span className="headerandvideo-header-elements-slogan-circle">
              {headerProps.slogancircle}
            </span>
          </h1>
          <h6 className="headerandvideo-header-elements-description">
            {headerProps.description}
          </h6>
          <div className="headerandvideo-header-elements-button">
            <button className="headerandvideo-header-elements-button-self">
              {headerProps.buttontext}
            </button>
          </div>
        </div>
      </div>
      <video
        className="headerandvideo-video"
        src={headerProps.videolink}
        autoPlay
        loop
        muted
      />
    </header>
  );
};

export default Header;
