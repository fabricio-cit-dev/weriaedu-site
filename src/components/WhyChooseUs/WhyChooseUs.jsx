import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/icons8-pesquisa-50.png";
import icon02 from "../../assets/img/icon/icons8-design-50.png";
import icon03 from "../../assets/img/icon/icons8-boletim-50.png";
import icon04 from "../../assets/img/icon/icons8-implantação-50.png";
import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
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
      title: "Pesquisa e planejamento",
      description: `O processo de desenvolvimento de uma empresa que cria plataformas de ensino utilizando IA e Ciência de Dados começa com uma pesquisa aprofundada para identificar as necessidades e lacunas existentes na área educacional. A empresa realiza um planejamento estratégico, definindo os objetivos, metas e escopo do projeto. Nesta fase, são considerados os recursos necessários, a tecnologia a ser utilizada e a equipe necessária para o desenvolvimento da plataforma.`,
    },
    {
      src: icon02,
      alt: "",
      link: "/",
      title: "Design e desenvolvimento",
      description: `Com base na pesquisa e no planejamento, a empresa inicia o processo de design e desenvolvimento da plataforma de ensino. Especialistas em design de interface de usuário (UI) e experiência do usuário (UX) trabalham em conjunto com engenheiros de software para criar uma interface intuitiva e amigável. A IA e a Ciência de Dados são aplicadas para desenvolver algoritmos inteligentes que adaptam o ensino às necessidades individuais dos alunos, personalizando o conteúdo e as atividades.`,
    },
    {
      src: icon03,
      alt: "",
      link: "/",
      title: "Testes e aprimoramento",
      description: `Após o desenvolvimento inicial da plataforma, são realizados testes rigorosos para verificar sua funcionalidade, desempenho e usabilidade. Feedbacks de usuários, incluindo alunos e professores, são coletados para identificar possíveis melhorias e ajustes. A empresa utiliza dados coletados durante os testes para aprimorar a plataforma, aperfeiçoar os algoritmos de IA e garantir a eficácia do ensino adaptativo.`,
    },
    {
      src: icon04,
      alt: "",
      link: "/",
      title: "Implantação e suporte",
      description: `Uma vez que a plataforma tenha passado pelos testes e refinamentos necessários, ela é implantada e disponibilizada para escolas, instituições educacionais e alunos. A empresa oferece suporte técnico e treinamento para professores e administradores, garantindo uma transição tranquila e um uso eficaz da plataforma. Além disso, a empresa continua a monitorar o desempenho da plataforma, coletando dados em tempo real e realizando atualizações regulares para garantir que ela permaneça atualizada e alinhada com as necessidades em constante evolução da educação.`,
    },
  ];

  return (
    <section id="soluctions" className="choose-area">
      <div className="section-title text-center mb-50">
        <br />
        <span
          className="sub-title"
          style={{
            color: "#FF6551",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "14px",
            marginLeft: "20px",
          }}
        >
          Nossos métodos
        </span>
        <h2
          className="title"
          style={{
            color: "#404040",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "40px",
            marginLeft: "20px",
          }}
        >
          Desenvolvimento de Plataformas de Ensino Inovadoras
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
