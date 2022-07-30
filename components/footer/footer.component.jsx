import "./footer.styles.scss";

const Footer = ({ footerProps }) => {
  return (
    <div className="footer">
      <div className="footer-upper">
        <h1 className="footer-upper-slogan">{footerProps.slogan}</h1>
        <a className="footer-upper-button" href="">
          <h1> {footerProps.buttontext}</h1>
        </a>
      </div>
      <div className="footer-lower">
        <div className="footer-lower-part1">
          <div className="footer-lower-part1-description">
            <p> {footerProps.description}</p>
          </div>
          <div className="footer-lower-part1-links">
            <h2 className="footer-lower-part1-links-home">
              <a href=""> {footerProps.link1}</a>
            </h2>

            <h2 className="footer-lower-part1-links-casestudy">
              <a href=""> {footerProps.link2}</a>
            </h2>

            <h2 className="footer-lower-part1-links-contact">
              <a href="">{footerProps.link3}</a>
            </h2>

            <h2 className="footer-lower-part1-links-livedemo">
              <a href=""> {footerProps.link4} </a>
            </h2>
          </div>
        </div>
        <div className="footer-lower-part2">
          <div className="footer-lower-part2-1">
            <p>{footerProps.address1}</p>
            <p>{footerProps.address2}</p>
            <a href="">
              <p>{footerProps.address3}</p>
            </a>
            <p>{footerProps.address4}</p>
            <p>{footerProps.address5}</p>
            <a href="">
              <p>{footerProps.address6}</p>
            </a>
          </div>
          <div className="footer-lower-part2-2">
            <p>{footerProps.caption}</p>
            <p>
              <a href="">{footerProps.datapr}</a>
              <a href="">{footerProps.impr}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
