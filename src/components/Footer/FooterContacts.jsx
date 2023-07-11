import React from "react";
import emailicon from "../../assets/img/footer/email-icon.svg";
import localiicon from "../../assets/img/footer/locali-icon.svg";

const FooterContact = () => {
  return (
    <>
      <div className="footer-contacts">
        <div className="email-contact">
          <img
            src={emailicon}
            alt="email-icon"
            className="emai-footer-icon"
            style={{
              backgroundColor: "#ff9100",
              borderRadius: "50%",
              padding: "5px",
              marginRight: "5px",
            }}
          ></img>
          contato@werial.com
        </div>
        <div className="location-container">
          <div style={{ color: "white" }}>
            <img
              src={localiicon}
              alt="localização"
              className="locali-icon"
              style={{
                backgroundColor: "#ff9100",
                borderRadius: "50%",
                padding: "5px",
                marginRight: "5px",
              }}
            ></img>
            <span className="location1">Brasília</span> <br />{" "}
            <span className="phone-number">+55 (61) 98346-3082</span>
            <br />
            SHS Quadra 01, Bloco A, Lojas 09 e 10
            <br />
            Asa Sul, Brasília-DF <br />
            CEP:70322-900, BR
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
