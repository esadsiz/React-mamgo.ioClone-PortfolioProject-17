import "./smartbudget.styles.scss";

const SmartBudget = ({ smartBudgetProps }) => {
  return (
    <div className="smartbudget">
      <div className="smartbudget-titleandslogan">
        <h5 className="smartbudget-titleandslogan-title">
          {smartBudgetProps.title}
        </h5>
        <h1 className="smartbudget-titleandslogan-slogan">
          {smartBudgetProps.slogan}
        </h1>
      </div>
      <div className="smartbudget-textandimage">
        <div className="smartbudget-textandimage-1">
          <p className="smartbudget-textandimage-1-text">
            <strong>{smartBudgetProps.text1strong}</strong>
            {smartBudgetProps.text1}
          </p>
          <img
            src={smartBudgetProps.image1}
            alt="statistic"
            className="smartbudget-textandimage-1-image"
          />
        </div>
        <div className="smartbudget-textandimage-2">
          <p className="smartbudget-textandimage-2-text">
            {smartBudgetProps.text2}
          </p>
          <img
            src={smartBudgetProps.image2}
            alt="statistic"
            className="smartbudget-textandimage-2-image"
          />
        </div>
      </div>
      <div className="smartbudget-casestudyandimage">
        <div className="smartbudget-casestudyandimage-casestudy">
          <h2 className="smartbudget-casestudyandimage-casestudy-firsttitle">
            {smartBudgetProps.casestudy.firsttitle}
          </h2>
          <h2 className="smartbudget-casestudyandimage-casestudy-secondtitle">
            {smartBudgetProps.casestudy.secondtitle}
          </h2>
          <h3 className="smartbudget-casestudyandimage-casestudy-description">
            {smartBudgetProps.casestudy.description}
          </h3>
          <button className="smartbudget-casestudyandimage-casestudy-buttontext">
            {smartBudgetProps.casestudy.buttontext}
          </button>
        </div>
        <img
          className="smartbudget-casestudyandimage-image"
          src={smartBudgetProps.casestudy.image}
          alt="image1"
        />
      </div>
      <h1 className="smartbudget-thanks-thankstext">
        {smartBudgetProps.thankstext}
      </h1>
      <div className="smartbudget-thanks">
        <h2 className="smartbudget-thanks-thankslogotext">
          {smartBudgetProps.thankslogotext}
        </h2>
        <img
          className="smartbudget-thanks-thankslogo"
          src={smartBudgetProps.thankslogo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SmartBudget;
