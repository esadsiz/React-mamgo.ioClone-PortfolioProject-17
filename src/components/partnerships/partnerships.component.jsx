import "./partnerships.component.scss";

const Partnerships = ({ partnershipsLogosProps }) => {
  const allPartnershipsLogos = Object.values(partnershipsLogosProps).map(
    (value, index) => {
      return <img className="partnerships-logos-logo" src={value} alt="" />;
    }
  );

  return (
    <div className="partnerships">
      <div className="partnerships-slogananddescription">
        <h1 className="partnerships-slogananddescription-slogan">
          Successful partnerships
        </h1>
        <p className="partnerships-slogananddescription-description">
          We work with and for the greatest companies in the world. Join us and
          become a mamgo partner.
        </p>
      </div>
      <div className="partnerships-logos">{allPartnershipsLogos}</div>
    </div>
  );
};

export default Partnerships;
