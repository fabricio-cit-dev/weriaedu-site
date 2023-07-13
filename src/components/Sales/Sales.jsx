import React, { useState, useEffect } from "react";
import styles from "./styles";
import icon01 from "../../assets/img/icon/icon_choose.png";
import icon02 from "../../assets/img/icon/icon_valores.png";
import icon03 from "../../assets/img/icon/icon_move.png";
import imgAI from "../../assets/img/images/estudologia_ia.jpg";
import SlickSliderSales from "./SlickSliderSales";
import SliderSales from "./slider-sales";
import SalesItem from "./slider-sales";

const Sales = () => {
  return (
    <section id="portfolio" className="chart-area chart-bg ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <br/>
              <span className="sub-title-about">Nossos Parceiros</span>
              <h2 className="title">
                <span>Estudologia</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="time-div">
          {/* {team_members.map((member, index) => (
            <div key={index} className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
              <TeamOneItem item={member} />
            </div>
          ))} */}
          <div style={{ display: "flex", flex: 0.5, padding: "1rem", height: "60vh" }}>
            <img
              className="imgEmpresa"
              src={imgAI}
              style={{ imageRendering: "auto", objectFit: "cover", width: "100%"}}
            />
          </div>
          <div
            style={{
              display: "flex",
              flex: 0.5,
              height: "75%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                textAlign: "justify",
                color: "white",
                fontSize: "19px",
                fontWeight: 500,
              }}
            >
              A Estudologia é uma empresa inovadora que desenvolveu uma
              plataforma de software baseada em Ciência de Dados para
              revolucionar a educação. Sua abordagem abrangente inclui ensino
              adaptativo, gestão da aprendizagem e da comunicação,
              proporcionando uma experiência educacional personalizada e
              eficiente. Com algoritmos avançados e análise de dados, a
              Estudologia oferece um ensino adaptado às necessidades de cada
              aluno, permitindo que os professores monitorem o progresso,
              atribuam tarefas e interajam de forma eficiente. Através da
              inovação constante e da utilização da Ciência de Dados, a
              Estudologia está impulsionando a transformação da educação,
              melhorando os resultados e o engajamento dos alunos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
