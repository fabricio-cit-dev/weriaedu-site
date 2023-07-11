import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/devops.png";
import icon02 from "../../assets/img/icon/inteligencia-artificial.png";
import icon03 from "../../assets/img/icon/iot1.png";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
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
      title: "Weria Devops",
      description: `Os maiores desafios dos negócios modernos é entregar software de alta qualidade e com rapidez, onde a abordagem tradicional de desenvolvimento de software, na qual as equipes de desenvolvimento e operações são separadas, não conseguia atender às demandas do mercado. Pensando nisso criamos a oferta Weria DevOps, um conjunto de práticas de cultura, processos e ferramentas com a finalidade de promover a integração das áreas de negócio de desenvolvimento e sustentação de software e operações de TI, para garantir o aumento de produtividade, agilidade, eficiência e disponibilidade dos seus softwares, permitindo que a nossa equipe responda rapidamente às suas necessidades entregando valor com inovação e melhoria contínua, fazendo uso de tecnologias automatizadas para garantir que as aplicações sejam entregues de forma confiável e segura, facilitando a resolução de problemas rapidamente em caso de falhas.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Weria IA",
      description: `A Inteligência Artificial (IA) tem evoluído rapidamente, e hoje é uma área de pesquisa ativa que envolve a criação de algoritmos e sistemas computacionais capazes de aprender, tomar decisões e realizar tarefas sem intervenção humana. A Weria IA é uma combinação de equipe técnica especializada com a escolha da ferramenta certa dependendo do tipo de tarefa de aprendizado de máquina que se deseja realizar. Fazemos isso por meio da identificação da melhor abordagem de inteligência artificial a ser utilizada, realizando um diagnóstico do tipo de problema a resolver, o conjunto de dados disponíveis, os recursos computacionais disponíveis e os objetivos de negócios específicos.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Weria IoT",
      description: `IoT, Internet das Coisas, ou Internet of Things em inglês, permite que as coisas “conversem” entre si e com outros dispositivos conectados à Internet, possibilitando a automação de tarefas, a melhoria da eficiência e a coleta de dados para a tomada de decisões baseadas em dados. Além disso, a IoT está revolucionando vários setores, como a indústria, a saúde, a agricultura e a segurança.Nessa era de tantas inovações, a Weria IoT veio para entregar soluções que variam de acordo com as necessidades específicas de cada empresa ou usuário. Algumas dessas soluções incluem Smart Home, Wearables, Agtech, Health Tech, Manutenção Preditiva, Cidades Inteligentes e muitas outras. Além dessas soluções customizadas, a Weria IoT possui seus próprios produtos, confira aqui.`,
    },
  ];

  return (
    <section id="soluctions" className="choose-area">
      <div className="section-title text-center mb-50" style={{backgroundColor: "#0000007f", borderRadius: "50px"}}>
        <br />
        <span className="sub-title" style={{color: "#ff5c00"}}>Nossas Soluções</span>
        <h2 className="title" style={{color: "#ff5c00"}}>
          soluções que visam melhorar e automatizar processos em diferentes
          setores!
        </h2>
      </div>

      <SlickSlider settings={slickSettings}>
        {slider_items.map((item, index) => (
          <div key={index}>
            <WhyChooseUsItem item={item} />
          </div>
        ))}
      </SlickSlider>
    </section>
  );
};

export default WhyChooseUs;
