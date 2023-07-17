import React from "react";
import img01 from "../../assets/img/images/4939210_46272.jpg";
import { Link } from "react-router-dom";
import ms from "../../assets/img/parceiros-redimensionadas/logo-ms.png";
import weria from "../../assets/img/parceiros-redimensionadas/Weria PNG 05 Artboard 6 Copy 3.png";
import newin from "../../assets/img/parceiros-redimensionadas/Logo_Newin_Preto (1).png";
import ares from "../../assets/img/parceiros-redimensionadas/ares_logo_preto-removebg-preview.png";
import bz from "../../assets/img/parceiros-redimensionadas/Bz__01_Artboard_498-removebg-preview.png";
const image = [];
const partners_list = [
  { src: ms, title: "ms" },
  { src: weria, title: "weria" },
  { src: newin, title: "newin" },
  { src: ares, title: "ares" },
  { src: bz, title: "bztech" },
];

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area-pt-130-pb-130">
      <div className="container">
        <div className="sub-title-div">
          <span className="sub-title-about" style={{color: "#404040"}}>
            Tenha uma educação de qualidade
          </span>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img
                src={img01}
                className="logo-whoweare"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="section-title mb-30">
                <h2 className="title" style={{ color: "#404040" }}>
                  Construindo soluções em busca de um{" "}
                  <span style={{ color: "#ff5c00" }}>Futuro melhor</span>
                </h2>
              </div>
              <p style={{ textAlign: "justify" }}>
                Nossa empresa é uma líder em tecnologia educacional, desenvolvendo
                softwares que visam melhorar a educação por meio de materiais de
                alta qualidade e o uso inteligente da Inteligência Artificial
                (IA). Nosso objetivo é maximizar o aprendizado dos alunos e
                oferecer soluções avançadas para instituições educacionais. A
                empresa se destaca pela criação de conteúdos atrativos e
                relevantes, trabalhando em colaboração com especialistas em
                educação. Além disso, a IA é aplicada para personalizar o ensino
                e analisar dados, adaptando-se às necessidades individuais dos
                alunos. Nossa empresa investe em pesquisa e desenvolvimento,
                buscando inovação constante, e oferece suporte técnico e
                treinamento para professores e instituições. Estamos
                transformando a forma como aprendemos, preparando a próxima
                geração para enfrentar os desafios do futuro com sucesso.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="partner-area-about">
          <div className="partners-whoweare">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-10">
                  <span className="sub-title-partners">Nossos Parceiros</span>
                </div>
              </div>
            </div>
            <div class="slider-partners">
              <div class="slide-track">
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90%"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                
                
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={newin}
                    // height="130"
                    width="100%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={ares}
                    // height="90"
                    width="60%"
                    alt=""
                  />
                </div>
                <div class="slide-partners">
                  <img
                    src={bz}
                    // height="90"
                    width="100%"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAre;
