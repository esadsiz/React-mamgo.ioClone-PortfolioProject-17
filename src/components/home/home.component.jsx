import "./home.styles.scss";
import Header from "../header/header.component";
import FirstThreeArticle from "../firstthreearticle/firstthreearticle.component";
import OnlyThreeSteps from "../onlythreesteps/onlythreesteps.component";
import Partnerships from "../partnerships/partnerships.component";
import AsIfByMagic from "../asifbymagic/asifbymagic.component";
import LastTwoArticle from "../lasttwoarticle/lasttwoarticle.component";
import SmartBudget from "../smartbudget/smartbudget.component";

const Home = ({ hLanguageProps }) => {
  return (
    <div className="home">
      <Header headerProps={hLanguageProps.headerObj} />
      <FirstThreeArticle
        firstThreeArticleProps={hLanguageProps.firstThreeArticleObj}
      />
      <OnlyThreeSteps onlyThreeStepsProps={hLanguageProps.onlyThreeStepsObj} />
      <Partnerships partnershipsProps={hLanguageProps.partnerships} />
      <AsIfByMagic asIfByMagicProps={hLanguageProps.asIfByMagicObj} />
      <LastTwoArticle lastTwoArticleProps={hLanguageProps.lastTwoArticleObj} />
      <SmartBudget smartBudgetProps={hLanguageProps.smartBudgetObj} />
    </div>
  );
};

export default Home;
