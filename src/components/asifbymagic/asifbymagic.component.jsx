import "./asifbymagic.component.scss";
import ThreeCardSection from "./threecardsection/threecardsection.component";

const AsIfByMagic = ({ asIfByMagicProps }) => {
  return (
    <div>
      <div className="asifbymagic">
        <h5 className="asifbymagic-title">{asIfByMagicProps.title}</h5>
        <h1 className="asifbymagic-slogan">
          {asIfByMagicProps.slogan} <br />
          <span className="asifbymagic-slogan-circle">
            {asIfByMagicProps.slogancircle}
          </span>
        </h1>
      </div>
      <ThreeCardSection
        className="allscrollsection-section1"
        CardItselfProps={asIfByMagicProps.section1}
      />
      <ThreeCardSection
        className="allscrollsection-section2"
        CardItselfProps={asIfByMagicProps.section2}
      />
      <ThreeCardSection
        className="allscrollsection-section3"
        CardItselfProps={asIfByMagicProps.section3}
      />
    </div>
  );
};

export default AsIfByMagic;
