import "./smartbudget.styles.scss.scss";

const SmartBudget = ({ SmartBudgetProps }) => {
  return (
    <div className="smartbudget">
      <div className="smartbudget-titleandslogan">
        <h5 className="smartbudget-titleandslogan-title">
          {SmartBudgetProps.title}
        </h5>
        <h1 className="smartbudget-titleandslogan-slogan">
          {SmartBudgetProps.slogan}
        </h1>
      </div>
      <div className="smartbudget-textandimage">
        <div className="smartbudget-textandimage-1">
          <p className="smartbudget-textandimage-1-text">
            <strong>{SmartBudgetProps.text1strong}</strong>
            {SmartBudgetProps.text1}
          </p>
          <img
            src={SmartBudgetProps.image1}
            alt="statistic"
            className="smartbudget-textandimage-1-image"
          />
        </div>
        <div className="smartbudget-textandimage-1">
          <p className="smartbudget-textandimage-1-text">
            {SmartBudgetProps.text2}
          </p>
          <img
            src={SmartBudgetProps.image2}
            alt="statistic"
            className="smartbudget-textandimage-2-image"
          />
        </div>
      </div>
      <div className="casestudyandimage">
        <div className="casestudyandimage-casestudy">
          <h2 className="casestudyandimage-casestudy-firsttitle">
            {SmartBudgetProps.casestudy.firsttitle}
          </h2>
          <h2 className="casestudyandimage-casestudy-secondtitle">
            {SmartBudgetProps.casestudy.secondtitle}
          </h2>
          <h3 className="casestudyandimage-casestudy-description">
            {SmartBudgetProps.casestudy.description}
          </h3>
          <button className="casestudyandimage-casestudy-buttontext">
            {SmartBudgetProps.casestudy.buttontext}{" "}
            <div className="casestudyandimage-casestudy-buttontext-arrow">
              &#8599;
            </div>
          </button>
        </div>
        <img
          className="casestudyandimage-image"
          src={SmartBudgetProps.casestudy.image}
          alt="image1"
        />
      </div>

      <div className="smartbudget-thanks">
        <h1 className="smartbudget-thanks-thankstext">
          {SmartBudgetProps.thankstext}
        </h1>
        <h2 className="smartbudget-thanks-thankslogotext">
          {SmartBudgetProps.thankslogotext}
        </h2>
        <img
          className="smartbudget-thanks-thankslogo"
          src={SmartBudgetProps.thankslogo}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SmartBudget;
