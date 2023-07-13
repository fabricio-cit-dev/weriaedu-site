import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/images/Capa.png";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Banner = () => {
  return (
    <section id="banner" className="banner-area banner-bg">
      <div className="container">
        <div className="banner-home">
          <div className="banner-content">
            <h2 className="title" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <h4
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                Por um futuro melhor
              </h4>
              25K+ ESTUDANTES <br />
              <span>CONFIARAM EM NÓS</span>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  color: "#000000",
                }}
              >
                Inovando a educação com soluções espetaculares
              </h3>
            </h2>

            <div className="banner-line">
              <div className="line"></div>
              <Link
                to="/#about"
                onClick={() => handleScrollToSection("about")}
                className="read-more"
              >
                Leia mais
              </Link>
            </div>
          </div>
          <div className="image-banner">
            <img src={logo} className="logo-animation"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
