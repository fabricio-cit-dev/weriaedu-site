import React from "react";
import imgAI from "../../assets/img/images/ai-conceito-de-nuvem-com-cerebro.jpg";

const TeamOne = () => {
  // const team_members = [
  //   {
  //     src: img01,
  //     name: "Lucas Gasparone",
  //     designation: "Founder & CO",
  //   },
  //   {
  //     src: img03,
  //     name: "Lucas Tauan",
  //     designation: "Commercial Executive",
  //   },
  //   {
  //     src: img02,
  //     name: "Brenda Miguins",
  //     designation: "Designer and Social Media",
  //   },
  //   {
  //     src: img04,
  //     name: "Ísis Silva",
  //     designation: "Fullstack Developer",
  //   },
  //   {
  //     src: img05,
  //     name: "Maurício Azevedo",
  //     designation: "Fullstack Developer",
  //   },
  //   {
  //     src: img06,
  //     name: "Mateus Pequeno",
  //     designation: "Fullstack Developer",
  //   },
  //   {
  //     src: img07,
  //     name: "Fabrício Hiury",
  //     designation: "Fullstack Developer",
  //   },
  //   {
  //     src: img08,
  //     name: "Kevison Filipe",
  //     designation: "Fullstack Developer",
  //   },
  //   {
  //     src: img09,
  //     name: "Douglas Santos",
  //     designation: "UI / UX",
  //   },
  //   {
  //     src: img10,
  //     name: "Luigi Vila",
  //     designation: "UI / UX",
  //   },
  // ];

  return (
    <section id="empresa" className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <h2 className="title">
                Impulsionados por <span>inteligência artificial</span> <br /> e <span>Humanos</span>                
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
          <div style={{ display: "flex", flex: .5, padding: "1rem" }}>
            <img className="imgEmpresa" src={imgAI} style={{ borderRadius: "50px" }} />
          </div>
          <div style={{ display: "flex", flex: .5, flexDirection: "column", padding: "1rem", backgroundColor: "#00000057", borderRadius: "50px"}}>
            <p style={{textAlign: "justify", color: "white", fontSize: "19px", fontWeight: 500}}>
              Aqui, você encontrará uma ampla seleção de soluções de IA que
              visam melhorar e automatizar processos em diferentes setores.
              Desde assistentes virtuais até sistemas de análise de dados,
              passando por chatbots e plataformas de reconhecimento de imagem e
              voz, nossos produtos são desenvolvidos com as tecnologias mais
              avançadas de IA, garantindo qualidade e desempenho superiores.
              Oferecemos soluções para empresas de diversos segmentos, desde
              pequenas startups até grandes corporações, ajudando-as a aumentar
              a eficiência de seus processos, otimizar seus custos e melhorar a
              experiência do usuário. Além disso, nossos produtos são projetados
              para serem intuitivos e fáceis de usar, mesmo para aqueles que não
              têm experiência prévia em IA. Com nossas soluções, você pode
              automatizar tarefas repetitivas, tomar decisões baseadas em dados
              e fornecer serviços personalizados para seus clientes, levando sua
              empresa para o próximo nível de sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
