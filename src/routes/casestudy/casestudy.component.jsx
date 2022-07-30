import CaseStudyHeader from "./casestudyheader/casestudyheader.component";
import CaseStudyArticles from "./casestudyarticles/casestudyarticles.component";

const caseStudyHeaderObj = {
  firsttitle: "CASE STUDY",
  slogan: "Academic Work",
  slogancircle: "better tomorrow.",
  description:
    "How the Swedish recruitment agency Academic Work helps young talents find their dream job and has been able to reduce its costs per application by 64 per cent in the process.",
  description2:
    "THANKS TO THE PARTNERSHIP WITH MAMGO.IO, WE HAVE BEEN ABLE TO HELP EVEN MORE YOUNG PROFESSIONALS FIND THEIR DREAM JOBS AND USE OUR RECRUITING BUDGET MUCH MORE EFFICIENTLY.",
  sign: "Leo Hård af Segerstad | Head of Digital Marketing",
  logolink:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60950551f9c39f6310c1865f_aw_white.png",
  imagelink:
    "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60916bfbebb067a9d39c5780_irfan-simsar-wxWulfjN-G0-unsplash-scaled-1.jpg",
};

const caseStudyArticlesObj = {
  first: {
    sloganpart1: "Home of young professionals",
    slogancircle: "Academic Work",
    title: "COMPANY",
    textlink: "Academic Work",
    text: " is considered Sweden's largest personnel service provider and was founded in 1998. Since 2008, the personnel service provider has also been active in Germany, with offices in Munich and Hamburg. Academic Work specialises in the placement of young professionals and students and helps young talents find their dream job every day. Academic Work places talents with top companies. A constant influx of applicants and a sustainable cost structure is therefore crucial for the business.",
    image: {
      image1:
        "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/6093f6c31434f2603e6dbe21_marco_02.png",
      image2:
        "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a7a50dcd4f869139d701ff_aw_bg_image-p-800.jpeg",
    },
  },

  second: {
    slogan: "Moving away from the classic",
    slogancircle: "post-and-pray",
    title: "THE CHALLENGE",
    text: "Academic Works' passive recruitment strategy for the German market was largely based on the publication of job advertisements on term-based job boards. In term-based job marketing, vacancies are advertised on various job boards, similar to a newspaper advertisement, for a fixed cost over a fixed period of time. A disadvantage of this method is that it is not possible to anticipate whether no applications or too many applications will be received for the vacancy during the fixed period. In digital recruiting, this model is therefore also referred to as the 'post-and-pray model'.",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60950825c641f6eab930197f_aw_image_02.png",
    title2: "CPC Job Boards require effective optimisation",
    text2:
      "Continuously noticeable price increases on the part of popular term-based job boards and the disadvantages already mentioned quickly led to a paradigm shift. Academic Work took the first steps in performance-based job marketing. In performance-based job marketing, costs are only incurred after clicks on job ads, incoming applications or successful hires.",
    text3:
      "With the placement of a large part of the media budget in ad delivery via cost-per-click (CPC), it quickly became clear that without effective control and optimisation, this model also leads to great inefficiencies and consequently high costs.In a joint evaluation with mamgo.io, the Swedish recruiter aimed for a significant improvement in the plan costs to be achieved per application as well as a more homogeneous distribution of the applications won across all advertised job ads as new strategic goals.",
  },

  third: {
    title: "THE SOLUTION",
    text1:
      "With mamgo.io, Academic Work relies on a broader, automated and controlled playout of all job ads on a variety of cost-per-click platforms. The continuous software-driven optimisation of all job ads also pays off in terms of the recruitment company's target achievement. Conversion-optimised landing pages in the Academic Work look and feel with smart end-to-end tracking (page visit → initiated application -> completed application) enable performance-based optimisation without having to change existing application processes at the Swedish company.",
    text2:
      "The result is a seamless integration into Academic Work processes, even without the use of IT resources. With mamgo.io, the recruitment company now reaches young talent on up to 15 platforms (job boards, aggregators, search engines, social media) and reduces its own dependence on large players in the market.",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a7a4b175f69c67c62b1d12_logo_bg.jpg",
  },

  fourth: {
    title: "THE RESULT",
    text1:
      "In the set-up and test phase of Academic Work and mamgo.io, the average cost-per-application already drops significantly within two months and finally settles at the desired target level of around 64% lower costs per application.",
    text2:
      "2. After completion of the test phase and a doubling of the media budget, the number of applications received was also doubled by mamgo.io while the application costs remained the same. Together with mamgo.io, Academic Work is now helping significantly more young talent find their dream job, saving an average of 64% of the cost per application.",
    text3:
      "3. After the outbreak of the pandemic in early 2020, Academic Work will be able to easily adapt its budget to the new market conditions thanks to mamgo.io's flexible collaboration model. The now gradual return of usual demand can be served quickly and sustainably by the HR service provider thanks to easy scaling.",
    cardimage:
      "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/60a27b0d24201e7bc2894705_Mamgo_Charts_02.jpg",
  },
};

const CaseStudy = () => {
  return (
    <div>
      <CaseStudyHeader caseStudyHeaderProps={caseStudyHeaderObj} />
      <CaseStudyArticles caseStudyArticlesProps={caseStudyArticlesObj} />
    </div>
  );
};

export default CaseStudy;
