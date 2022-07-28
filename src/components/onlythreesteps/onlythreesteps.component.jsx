import ThreeCard from "./threecard/threecard.component";
import "./onlythreesteps.styles.scss";

const OnlyThreeSteps = ({ onlyThreeStepsProps }) => {
  return (
    <div className="onlythreesteps">
      <h1 className="onlythreesteps-slogan">
        {onlyThreeStepsProps.slogan.part1}
        <span className="onlythreesteps-slogan-circle">
          {onlyThreeStepsProps.slogan.circlepart}
        </span>
        {onlyThreeStepsProps.slogan.part2}
      </h1>

      <div className="onlythreesteps-cards">
        <ThreeCard threeCardProps={onlyThreeStepsProps.card1} />
        <ThreeCard threeCardProps={onlyThreeStepsProps.card2} />
        <ThreeCard threeCardProps={onlyThreeStepsProps.card3} />
      </div>
    </div>
  );
};

export default OnlyThreeSteps;
