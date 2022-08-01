import "./footer.styles.scss";

const Footer = ({ footerProps }) => {
  return (
    <div className="footer">
      <div className="footer-upper">
        <h1 className="footer-upper-slogan">{footerProps.slogan}</h1>
        <h1 className="footer-upper-button"> {footerProps.buttontext}</h1>
      </div>
      <div className="footer-lower">
        <div className="footer-lower-part1">
          <div className="footer-lower-part1-description">
            <p> {footerProps.description}</p>
          </div>
          <div className="footer-lower-part1-links">
            <h2 className="footer-lower-part1-links-home">
              {footerProps.link1}
            </h2>

            <h2 className="footer-lower-part1-links-casestudy">
              {footerProps.link2}
            </h2>

            <h2 className="footer-lower-part1-links-contact">
              {footerProps.link3}
            </h2>

            <h2 className="footer-lower-part1-links-livedemo">
              {footerProps.link4}
            </h2>
          </div>
        </div>
        <div className="footer-lower-part2">
          <div className="footer-lower-part2-1">
            <p>{footerProps.address1}</p>
            <p>{footerProps.address2}</p>

            <p>{footerProps.address3}</p>

            <p>{footerProps.address4}</p>
            <p>{footerProps.address5}</p>

            <p>{footerProps.address6}</p>
          </div>
          <div className="footer-lower-part2-2">
            <p>{footerProps.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
