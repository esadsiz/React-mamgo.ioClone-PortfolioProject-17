import "./headerandvideo.styles.scss";

const Header = () => {
  return (
    <header className="headerandvideo">
      <div className="headerandvideo-header">
        <div className="headerandvideo-header-elements">
          <h2 className="headerandvideo-header-elements-firsttitle">
            LEAN-BACK RECRUITING SOLUTION
          </h2>
          <h1 className="headerandvideo-header-elements-slogan">
            Hire today for a
            <br />
            <span className="headerandvideo-header-elements-slogan-circle">
              better tomorrow.
            </span>
          </h1>
          <h6 className="headerandvideo-header-elements-description">
            We find your colleagues of tomorrow - as easy as child's play and as
            if by magic. The most sustainable way of recruiting.
          </h6>
          <div className="headerandvideo-header-elements-button">
            <button className="headerandvideo-header-elements-button-self">
              Start Now
            </button>
          </div>
        </div>
      </div>
      <video
        className="headerandvideo-video"
        src="https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a27108901bfa14e30f9b43_Mamgo_KeyVisual_031_Master_MP4-transcode.webm"
        autoPlay
        loop
        muted
      />
    </header>
  );
};

export default Header;
