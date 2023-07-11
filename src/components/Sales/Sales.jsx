import React, { useState, useEffect } from "react";
import styles from "./styles";
import icon01 from "../../assets/img/icon/icon_choose.png";
import icon02 from "../../assets/img/icon/icon_valores.png";
import icon03 from "../../assets/img/icon/icon_move.png";
import SlickSliderSales from "./SlickSliderSales";
import SliderSales from "./slider-sales"
import SalesItem from "./slider-sales";

const Sales = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: icon01,
      alt: "",
      link: "/",
      title: "Por que Nos Escolher?",
      description: `Se você está procurando uma empresa que desenvolve soluções em IA, IoT e DevOps, é importante escolher uma equipe altamente qualificada e experiente. Nós somos a escolha certa para você. Nossa equipe é formada por especialistas em diversas áreas, incluindo inteligência artificial, aprendizado de máquina, análise de dados e engenharia de software. Isso significa que temos a capacidade de criar soluções personalizadas e inovadoras para atender às necessidades específicas do seu negócio. Além disso, estamos constantemente atualizando nossas habilidades e conhecimentos para garantir que nossos clientes recebam as soluções mais avançadas e eficientes. Então, se você quer uma equipe que possa fornecer soluções de IA, IoT e DevOps de alta qualidade, escolha-nos.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Nossos Valores",
      description: `Como empresa de desenvolvimento de IoT, IA e DevOps, acreditamos que nossos valores são a essência do que fazemos. A transparência é um valor fundamental para nós, que mantemos em todos os aspectos do nosso trabalho, desde a comunicação com nossos clientes até a maneira como colaboramos como equipe. A integridade é outra parte essencial de nossa cultura, garantindo que sempre agimos com ética e honestidade em tudo o que fazemos. E, por fim, nosso compromisso com a excelência nos impulsiona a buscar constantemente a inovação e a excelência em nosso trabalho. Esses valores são a base do nosso sucesso e são o que nos guiam em nosso trabalho diário.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "O Que Nos Move?",
      description: `É a possibilidade de ajudar nossos clientes a alcançar seus objetivos de negócios de maneira mais eficaz e eficiente. Estamos entusiasmados com o potencial da inteligência artificial para transformar a maneira como as empresas operam e estamos comprometidos em ajudar nossos clientes a aproveitar ao máximo essa tecnologia.`,
    },
  ];

  return (
    <section id="portfolio" className="chart-area chart-bg ">
      <div className="sub-title-div">
        <br />
        <br />
        <br />
        <br />
        <br />
        <span className="sub-title-about">Nossos Diferenciais</span>
      </div>
      <div className="projetos" style={{display: "flex", flexDirection: ""}}>
        <SlickSliderSales settings={slickSettings}>
          {slider_items.map((item, index) => (
            <div key={index}>
              <SalesItem item={item} />
            </div>
          ))}
        </SlickSliderSales>

        {/* <div className="texto-projetos">
          <td>
            {currentItem.description} <tr> {currentItem.changingText} </tr>{" "}
            <br />
            {currentItem.endtext}
          </td>
        </div> */}

        {/* <div style={styles.containerImage}>
          <div class="slide">
            <img
              src={currentItem.image}
              alt="ms-project"
              style={{ marginLeft: "0" }}
            />
          </div>
        </div> */}
      </div>

      {/* <div style={styles.containerButtons}>
        <button style={styles.button} onClick={showPreviousItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageLeftSide} />
        </button>
        <hr style={styles.separator} />
        <button style={styles.button} onClick={showNextItem}>
          <img src={IconNest} alt="ms-project" style={styles.imageRightSide} />
        </button>
      </div> */}
    </section>
  );
};

export default Sales;
