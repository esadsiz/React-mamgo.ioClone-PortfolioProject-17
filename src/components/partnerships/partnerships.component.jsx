import "./partnerships.component.scss";

const Partnerships = ({ partnershipsProps }) => {
  const allPartnershipsLogos = Object.values(partnershipsProps.logos).map(
    (value, index) => {
      return <img className="partnerships-logos-logo" src={value} alt="" />;
    }
  );

  return (
    <div className="partnerships">
      <div className="partnerships-slogananddescription">
        <h1 className="partnerships-slogananddescription-slogan">
          {partnershipsProps.title}
        </h1>
        <p className="partnerships-slogananddescription-description">
          {partnershipsProps.description}
        </p>
      </div>
      <div className="partnerships-logos">{allPartnershipsLogos}</div>
    </div>
  );
};

export default Partnerships;
