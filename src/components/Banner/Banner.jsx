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
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title">
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
                    marginTop: "20px",
                    color: "#000000",
                  }}
                >
                  Inovando a educação com soluções espetaculares
                </h3>
              </h2>
              <img src={logo} className="logo-animation"></img>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
