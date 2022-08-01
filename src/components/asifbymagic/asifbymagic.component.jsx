import "./asifbymagic.component.scss";
import ThreeCardSection from "./threecardsection/threecardsection.component";

const AsIfByMagic = ({ asIfByMagicProps }) => {
  return (
    <div className="asifbymagic">
      <h5 className="asifbymagic-title">{asIfByMagicProps.title}</h5>
      <h1 className="asifbymagic-slogan">
        {asIfByMagicProps.slogan} <br />
        <span className="asifbymagic-slogan-circle">
          {asIfByMagicProps.slogancircle}
        </span>
      </h1>
      <div className="asifbymagic-cards">
        <ThreeCardSection CardItselfProps={asIfByMagicProps.section1} />
        <ThreeCardSection CardItselfProps={asIfByMagicProps.section2} />
        <ThreeCardSection CardItselfProps={asIfByMagicProps.section3} />
      </div>
    </div>
  );
};

export default AsIfByMagic;
