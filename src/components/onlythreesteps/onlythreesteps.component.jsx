import ThreeCard from "./threecard/threecard.component";
import "./onlythreesteps.styles.scss";

const OnlyThreeSteps = ({ onlyThreeStepsProps }) => {
  return (
    <div className="threecard">
      <h1 className="threecard-slogan">
        {onlyThreeStepsProps.slogan.part1}
        <span className="threecard-slogan-circle">
          {onlyThreeStepsProps.slogan.circlepart}
        </span>
        <br /> {onlyThreeStepsProps.slogan.part2}
      </h1>

      <div className="threecard-cards">
        <ThreeCard threeCardProps={onlyThreeStepsProps.card1} />
        <ThreeCard threeCardProps={onlyThreeStepsProps.card2} />
        <ThreeCard threeCardProps={onlyThreeStepsProps.card3} />
      </div>
    </div>
  );
};

export default OnlyThreeSteps;
