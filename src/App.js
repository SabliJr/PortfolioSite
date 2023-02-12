import { useEffect, useState } from "react";
import "./App.css";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Headr/Header";
import ScrollToTop from "./Components/ScrollBtn/ScrollToTop";
import Work from "./Components/Work/Work";
import Loader from "./Loader";

const App = () => {
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className='App'>
      <ScrollToTop />
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
