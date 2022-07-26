import FourthArticle from "./fourtharticle/fourtharticle.component";
import "./lasttwoarticle.styles.scss";

const LastTwoArticle = ({ lastTwoArticleProps }) => {
  return (
    <div>
      <FourthArticle fourthArticleProps={lastTwoArticleProps.fourth} />
    </div>
  );
};
export default LastTwoArticle;
