import "./home.styles.scss";
import Header from "../header/header.component";
import FirstThreeArticle from "../firstthreearticle/firstthreearticle.component";
import OnlyThreeSteps from "../onlythreesteps/onlythreesteps.component";
import Partnerships from "../partnerships/partnerships.component";
import AsIfByMagic from "../asifbymagic/asifbymagic.component";
import LastTwoArticle from "../lasttwoarticle/lasttwoarticle.component";
import SmartBudget from "../smartbudget/smartbudget.component";

const headerObj = {
  firsttitle: "LEAN-BACK RECRUITING SOLUTION",
  slogan: "Hire today for a",
  slogancircle: "better tomorrow.",
  description:
    "We find your colleagues of tomorrow - as easy as child's play and as if by magic. The most sustainable way of recruiting.",
  buttontext: "Start Now",
  videolink:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a27108901bfa14e30f9b43_Mamgo_KeyVisual_031_Master_MP4-transcode.webm",
};

const firstThreeArticleObj = {
  first: {
    sloganpart1: "Because",
    slogancircle: "great ideas",
    sloganpart2: "must not fail due to a lack of good colleagues.",
    name: "Marco Dembowski",
    cofounder: "Co-Founder mamgo.io",
    title: "MISSION",
    text: " Every company is only as strong as the people behind it. We promote the good ones, those with groundbreaking working conditions and great visions. Because great ideas must not fail due to a lack of good colleagues. We support companies with a good working culture and shape the working world of tomorrow.",
    image: {
      image1:
        "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/608ff08e406d106f2cca751c_A9_07463-p-1080.jpeg",
      image2:
        "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a79ef1288196849b2cb8d4_mamgo_io_co_worker-p-500.jpeg",
    },
  },

  second: {
    slogan:
      "We place digital jobs like analogue newspaper ads. But we order pizza via an app.",
    slogancircle: "Funny, isn't it?",
    title: "RUNTIME BASED? UNINTERESTED!",
    text: "You run time-based job ads? We can understand that, as we all know, gambling can be addictive. Wouldn't it be great to invest your hard-earned money only in actual job applications? We can help you with that.",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a79f5d38046c6cdf177cb9_blurry_bg-p-800.jpeg",
    cardslogan:
      "mamgo - prevention counselling for run-time jobposting addicts",
    callus: "CALL US",
    mobilenumber: "+49 6201 71 09 770",
    click: "OR CLICK BELOW",
    buttontext: "Find help",
  },

  third: {
    slogan: "Not the 5th wheel on the wagon - your new",
    slogancircle: "autopilot.",
    title: "SET UP? EASY AS CHILD'S PLAY!",
    text1:
      "You already have a great application tacking system in place? Great - because mamgo is a plug-and-play extension that fits in seamlessly and is used in addition to all existing processes. Finally, the missing piece of the puzzle that will take your passive online recruiting to the next level.",
    textstrong: "And best of all:",
    text2: "You don't even need to involve your IT to get started.",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a7a45c599b9973d649bbb0_blue_green_bg-p-800.jpeg",
    cardslogan:
      "Make it easy for yourself - become an online recruiting superhero with mamgo.",
  },
};

const onlyThreeStepsObj = {
  slogan: {
    part1: "Your new colleagues are",
    circlepart: "only three steps",
    part2: "away. You don't even need running shoes for that.",
  },

  card1: {
    logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/609ea6b9a87000f0cc03946c_einfach.png",
    title: "YOUR START WITH MAMGO.",
    description:
      "Let's define your goals together. Do you need reinforcements quickly, the best applicants on the market or do you have a very tight budget? None of this is an issue for mamgo. You send us your vacancies plug-and-play in the format of your choice and our software takes care of the rest. Easy, isn't it?",
  },

  card2: {
    logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/609eaabdf4811723b18dcb4a_waage.png",
    title: "YOUR JOB ADS ALL OVER THE WEB.",
    description:
      "How many web- and social media sites have you visited today? Your potential applicants are no different and that's why mamgo posts fully automated and smart ads only where your candidates actually see it at any given moment.",
  },

  card3: {
    logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/609ea6a10365d29765df88d3_pay.png",
    title: "YOU ONLY PAY FOR WHAT YOU GET.",
    description:
      "We turn the black box into a glass box. You only pay if your job ad is clicked, you receive an application or hire new colleagues. Quasi the fair trade among recruiting solutions.",
  },
};

const partnershipsLogos = {
  logo1:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/62691e1ca6bb8d8297be538c_papp_logo.png",
  logo2:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60813904c1271e3f65bb985a_hay-p-500.png",
  logo3:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60813910f04b450cd5a0a500_br-p-500.png",
  logo4:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/62691e2fa637b38357c7501a_pamec-p-500.png",
  logo5:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/62691e26238e2d9d47e4b1b4_puregym_logo-p-500.png",
  logo6:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/608138b37216111300e728ee_aw-p-500.png",
};

const asIfByMagicObj = {
  title: "AS IF BY MAGIC",
  slogan: "How can I use my recruiting",
  slogancircle: "budgets more efficiently?",
  section1: {
    logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/609ea6b9a87000f0cc03946c_einfach.png",
    title: "Simple start",
    description:
      "You don't want to burden your busy IT with yet another ticket? We know that feeling That's why with mamgo you can start improving your recruiting right away - even without asking your IT for help. You're welcome!",
  },
  section2: {
    logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/609eaa67a5df5eabb1750478_switch.png",
    title: "Smart posting",
    description:
      "mamgo posts your ads right where the best results are delivered for you. Thanks to intelligent algorithms and forecasts enriched with real-time data, we know when and where each of your jobs needs to be posted (or not posted). Sounds complicated? It sure is! Luckily, mamgo does all the work for you.",
  },
  section3: {
    logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/609eaabdf4811723b18dcb4a_waage.png",
    title: "Super fair & fast",
    description:
      "Say goodbye to runtime based contracts and yearly fixed costs. With mamgo, you only pay for what you get. React at lightning speed to immediate recruiting needs or save your money when things are more quiet. That is our understanding of fairness.",
  },
};

const lastTwoArticleObj = {
  fourth: {
    slogan: "Put an end to chaos and",
    slogancircle: "fingers crossed.",
    title: "ADIÓS RIGID CONTRACTS AND FIXED COSTS.",
    text: "Runtime job boards, aggregators, multiposters, social media, search engines. The possibilities are endless, it's easy to lose track and end up sticking with the tried and tested. Doubts as to whether the as always job board is really always the best choice are pushed aside. After all, there is enough else to do. Sound familiar? mamgo can help - get on board now!",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a27b004be1072ba52521b3_Mamgo_Charts_01-p-800.jpeg",
    cardslogan:
      "Post-&-Pray? For us, good job performance is not a question of faith.",
  },

  fifth: {
    slogancircle: "Finally time",
    slogan: "for the important things in life.",
    title: "HELLO FLEXIBILITY AND PAY-ONLY-WHAT-YOU-GET!",
    text: "mamgo brings the fun back into online recruiting by making your work significantly easier. You define the goals, we take care of the rest: Where should I post which job? How do I get the best out of each ad? How do I keep an eye on costs? When do I have to make adjustments? We provide you with all the answers - fully automated and as if by magic - so that you have time for being a recruiter again.",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a27b0d24201e7bc2894705_Mamgo_Charts_02.jpg",
    cardslogan:
      "Make it easy for yourself - become an online recruiting superhero with mamgo.",
  },
};

const smartBudgetObj = {
  title: "SMART BUDGET ALLOCATION. FULLY AUTOMATED.",
  slogan: "Every job is different. mamgo gives each exactly what it needs.",
  text1strong: "Every vacancy has different requirements.",
  text1:
    "Why then lump the rocket scientist and the assistant together and advertise them in the same way? You get too many applicants for one job and none at all for the other? We'd be happy to relieve you of these worries.",
  text2:
    "mamgo distributes budget intelligently and in real time across all jobs so that every cent pays towards achieving your goals.",
  image1:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a7a6802a0f31312cbba32f_traditional_marketing.jpg",
  image2:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a7a6d9b972566987f9e4a1_performance-p-800.jpeg",
  casestudy: {
    firsttitle: "ACADEMIC WORK",
    secondtitle: "Case Study",
    description:
      "How the Swedish recruiting company was able to reduce its costs per application by 64 per cent.",
    buttontext: "Read more",
    image:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60994d5aa5d9b16bbc0e6dc0_Desktop-Text-Box_AW-Academy-desk-box-environment_1400x550_002-1.jpg",
  },
  thankstext:
    "Thanks to the partnership with mamgo.io, we were able to help even more young professionals find their dream job and use our recruiting budget noticeably more efficiently.",
  thankslogotext: "LEO HÅRD AF SEGERSTAD | HEAD OF DIGITAL MARKETING",
  thankslogo:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/607ff41b13c816088e3039ac_academic_work_logo.png",
};

const Home = () => {
  return (
    <div className="home">
      <Header headerProps={headerObj} />
      <FirstThreeArticle firstThreeArticleProps={firstThreeArticleObj} />
      <OnlyThreeSteps onlyThreeStepsProps={onlyThreeStepsObj} />
      <Partnerships partnershipsLogosProps={partnershipsLogos} />
      <AsIfByMagic asIfByMagicProps={asIfByMagicObj} />
      <LastTwoArticle lastTwoArticleProps={lastTwoArticleObj} />
      <SmartBudget smartBudgetProps={smartBudgetObj} />
    </div>
  );
};

export default Home;
