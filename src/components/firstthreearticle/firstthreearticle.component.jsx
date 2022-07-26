import FirstArticle from "./firstarticle/firstarticle.component";
import SecondArticle from "./secondarticle/secondarticle.component";
import ThirdArticle from "./thirdarticle/thirdarticle.component";
import "./firstthreearticle.styles.scss";

const FirstThreeArticle = ({ firstThreeArticleProps }) => {
  return (
    <div className="firstthreearticle">
      <FirstArticle firstArticleProps={firstThreeArticleProps.first} />
      <SecondArticle secondArticleProps={firstThreeArticleProps.second} />
      <ThirdArticle thirdArticleProps={firstThreeArticleProps.third} />
    </div>
  );
};

export default FirstThreeArticle;
