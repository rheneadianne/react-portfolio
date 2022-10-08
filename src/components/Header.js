import React, { useState } from 'react';
import Navigation from "./Navigation";
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
    <header>
      <section class="jumbotron jumbotron-fluid text-center m-5">
        <article class="container">
          <h1 class="display-4 text-uppercase"><b>R</b>henea <b>E</b>speleta</h1>
          <p class="lead ">Public Health Nurse, Hobby Web Dev, and <i>(hopefully)</i> Future Epidemiologist</p>
        </article>
        <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      </section>
      <main>
        <article>{renderPage(currentPage)}</article>
      </main>
    </header>
  )

}

export default Header