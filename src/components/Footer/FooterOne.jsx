import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/weria-logo-nome-branca.png";
import { scrollToTop } from "../../lib/helpers";
import FooterContact from "./FooterContacts";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const FooterOne = () => {
  return (
    <footer id="footer">
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <img
                  src={logoImage}
                  alt="Incript Logo"
                  style={{ marginLeft: "-40px"}}
                />
                <div className="footer-content">
                  <p>
                    <span className="footer-titulo">Conectando Ideias</span>
                    <br />
                    Soluções inovadoras e inteligentes para ajudar nossos
                    clientes a transformar seus negócios e alcançar o sucesso!
                  </p>
                  <ul className="footer-social">
                    <li>
                      <a href="https://www.linkedin.com/company/incript/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/incriptime/">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-contacts">
              <div className="footer-contacts-container">
                <FooterContact />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023. All Rights Reserved Weria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
