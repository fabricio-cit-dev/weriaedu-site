import React from "react";
import imgAI from "../../assets/img/images/print-odisseia.png";

const TeamOne = () => {
  return (
    <section id="empresa" className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span
                className="sub-title"
                style={{
                  color: "#ffffff",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                Nossos Parceiros
              </span>
              <h2 className="title">
                <span>Odisseia</span>
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
              style={{ imageRendering: "auto", objectFit: "fill" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flex: 0.5,
              flexDirection: "column",
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
              A Educar Games desenvolveu um game RPG educacional que combina
              diversão e aprendizado, utilizando Inteligência Artificial (IA). O
              projeto tem como objetivo ensinar disciplinas como matemática e
              história de maneira envolvente e interativa. Os jogadores exploram
              um mundo virtual, enfrentando desafios e solucionando problemas
              relacionados às diferentes áreas do conhecimento. A IA personaliza
              a experiência de cada jogador, adaptando o nível de dificuldade e
              fornecendo atividades específicas para fortalecer suas
              habilidades. O software é acessível em diferentes dispositivos e
              possui uma interface intuitiva. A Educar Games busca transformar a
              educação em uma jornada emocionante, unindo diversão,
              interatividade e conhecimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
