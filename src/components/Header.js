import React, { useState } from 'react';
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";



function Header() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About></About>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <Contact></Contact>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <main>
      <div>{renderPage(currentPage)}</div>
    </main>
  )

}

export default Header