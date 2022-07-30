import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./components/home/home.component";
import CaseStudy from "./routes/casestudy/casestudy.component";
import Career from "./routes/career/career.component";
import BookDemo from "./routes/bookdemo/bookdemo.component";
import NavigationBar from "./components/navigationbar/navigationbar.component";
import Footer from "./components/footer/footer.component";

const navigationBarObj = {
  logo: "https://uploads-ssl.webflow.com/607eb2d6716609b9332287c3/6126681a56066d1405319684_Artboard%201.svg",
  link1: "Home",
  link2: "Case Study",
  link3: "Career",
  lang1: "De",
  lang2: "En",
  buttontext: "Book Demo",
};

const footerObj = {
  slogan: "Don't waste time. Start with us now.",
  buttontext: "Here we go",
  description:
    "We are convinced that through the use of modern technologies, vacancies can be filled faster, cheaper and more sustainably by recruitment agencies and companies with suitable candidates from all over the internet.",
  link1: "Home",
  link2: "Case Study",
  link3: "Contact",
  link4: "Live Demo",
  address1: "Mamgo",
  address4: "GmbH & Co. KG",
  address2: "69469 Weinheim",
  address5: "Judengasse 4",
  address3: "+49 6201 71 09 770",
  address6: "hello@mamgo.io",
  caption: "cloned by esadsiz - mamgo GmbH & Co. KG © 2021",
  datapr: "Data protection",
  impr: "Imprint",
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar navigationBarProps={navigationBarObj} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="casestudy" element={<CaseStudy />} />
          <Route path="career" element={<Career />} />
          <Route path="bookdemo" element={<BookDemo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer footerProps={footerObj} />
      </BrowserRouter>
    </div>
  );
}

export default App;
