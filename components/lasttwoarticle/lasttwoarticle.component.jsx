import FourthArticle from "./fourtharticle/fourtharticle.component";
import FifthArticle from "./fiftharticle/fiftharticle.component";
import "./lasttwoarticle.styles.scss";

const LastTwoArticle = ({ lastTwoArticleProps }) => {
  return (
    <div>
      <FourthArticle fourthArticleProps={lastTwoArticleProps.fourth} />
      <FifthArticle fifthArticleProps={lastTwoArticleProps.fifth} />
    </div>
  );
};
export default LastTwoArticle;
