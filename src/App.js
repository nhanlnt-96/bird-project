import "./styles/App.scss";

import React from "react";
import Banner from "./components/banner";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Banner/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
