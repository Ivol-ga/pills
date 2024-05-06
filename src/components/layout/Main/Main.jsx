import React from "react";
import piluls from "../../assets/img/piluls.gif";
import pils from "../../assets/img/pils.png";
import woman from "../../assets/img/woman.png";
import cert from "../../assets/img/cert.png";
import arrows from "../../assets/icon/arrows.webp";
import icons from "../../assets/icon/icons.png";
import { Button } from "../../Button";

function Main() {
  function onSuccess(formNode) {
    alert("Sucsess!");
    formNode.classList.toggle("hidden");
  }

  function onError(error) {
    alert(error.message);
  }

  function getFormData(formData) {
    const data = new FormData(formData);
    return data;
  }

  async function submitFormData(data) {
    return await fetch("api.php", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    const data = getFormData(event.target);
    const { status, error } = await submitFormData(data);

    if (status === 200) onSuccess(event.target);
    else onError(error);
  }

  return (
    <>
      <div className="wrapper">
        <div className="content container">
          <section className="section__first">
            <h2 className="main__title">
              CARDIOX AYUDA A REDUCIR LA PRESIÓN ARTERIAL Y A <br />
              FORTALECER LOS VASOS SANGUÍNEOS
            </h2>
            <h2 className="main__text">
              <i>
                El tono vascular se restaura completamente después del curso del
                tratamiento
              </i>
            </h2>
            <div className="main__wrapper">
              <img
                className="main__img"
                width="768"
                src={piluls}
                alt="pils"
                loading="lazy"
              ></img>
              <ul className="main__list">
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text">
                    Reduce los niveles de colesterol
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text">
                    Reduce la tensión arterial
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text">
                    Elaborado con ingredientes naturales
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text">
                    Refuerza las paredes de los vasos sanguíneos
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text">
                    Eficaz en todas las fases de la hipertensión
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text  text__red">
                    50% de DESCUENTO
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text text__red">
                    GARANTÍA DE DEVOLUCIÓN DE DINERO
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text text__red">
                    ENVÍO GRATUITO EN 1-2 DÍAS
                  </span>
                </li>
                <li className="main__list-item">
                  <span className="main__list-icon">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "#34c954" }}
                    ></i>
                  </span>
                  <span className="main__list-text text__red">
                    PAGO SEGURO AL RECIBIRLO
                  </span>
                </li>
              </ul>
              <p className="main__text-desc">SOLAMENTE HOY:</p>
              <h3 className="main__text-h3">
                El precio del producto es
                <br /> de solo 149 pen
              </h3>
              <h3 className="main__text-h3">en lugar del 298 pen</h3>

              <p className="main__text-desc text__red">50% REBAJADO!</p>
              <img
                className="main__img"
                width="768"
                src={pils}
                alt="pils"
                loading="lazy"
              ></img>
              <div className="" id="form">
                <h4 className="form__title">RELLENA EL FORMULARIO</h4>
                <p className="form__text">
                  Contactaremos contigo en un plazo de 24 horas para responder a
                  tus preguntas y confirmar tu pedido.
                </p>
                <form action="api.php" method="POST" className="form">
                  <div className="form__wrapper">
                    <div className="form__input_wrapper">
                      <input
                        type="hidden"
                        name="subid"
                        value="2aa6as64lmq5d"
                      ></input>
                      <input type="hidden" name="formId" value="1"></input>
                      <input type="hidden" name="flow" value="4884"></input>
                      <input type="hidden" name="offer" value="3"></input>
                      <input type="hidden" name="country" value="PE"></input>
                      <input
                        type="hidden"
                        name="currency"
                        value="149.00 pen"
                      ></input>
                      <input type="hidden" name="gсlid" value="{gсlid}"></input>

                      <label htmlFor="name">
                        <i>Tu nombre y apellido</i>{" "}
                      </label>
                      <input
                        className="form__input-desc"
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="Nombre"
                      />
                    </div>
                    <div className="form__input_wrapper">
                      <label htmlFor="name">
                        <i>Número de teléfono</i>{" "}
                      </label>
                      <input type="tel" name="tel" id="tel" required></input>
                    </div>
                    <Button onClick={() => handleFormSubmit()} />
                    <div className="form__icons">
                      <img
                        max-width="485"
                        height="110"
                        src={icons}
                        alt="icons"
                        loading="lazy"
                      ></img>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className="section__natural">
        <h2 className="section__natural-title">PRODUCTO 100% NATURAL</h2>
        <img
          className="main__img"
          width="768"
          // height="768"
          src={woman}
          alt="woman"
          loading="lazy"
        ></img>
        <p className="form__text">
          <span className="text__red">Cardiox</span> está elaborado únicamente
          con ingredientes 100% naturales, sometidos a pruebas de laboratorio y
          certificados.
        </p>
        <img
          className="main__img"
          width="768"
          // height="768"
          src={cert}
          alt="woman"
          loading="lazy"
        ></img>
        <p className="form__text">
          Desarrollado por un equipo de EXPERTOS, este producto reduce la
          tensión arterial, disminuye el colesterol, fortalece los vasos
          sanguíneos y previene las enfermedades cardiovasculares.
        </p>
        <h4 className="section__natural-h4">FACILIDAD DE USO</h4>
        <p className="form__text">
          Tomar 1 cápsula 3 veces al día después de las comidas con un vaso de
          agua.
        </p>
      </section>
      <section className="section__reserva content container">
        <h2 className="main__title">
          RESERVA AHORA CARDIOX A UN PRECIO ATRACTIVO
        </h2>
        <div className="main__wrapper">
          <img
            className="main__img"
            width="768"
            // height="768"
            src={piluls}
            alt="pils"
            loading="lazy"
          ></img>
          <div className="main__rating">
            <span className="rating">★★★★★ </span>
            <span className="main__rating-text">
              <em>13.389 comentarios positivos</em>
            </span>
          </div>
          <p className="main__text-desc section__reserva-text">
            Haz tu pedido ahora y obtén:
          </p>
          <ul className="main__list">
            <li className="main__list-item">
              <span className="main__list-icon">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#34c954" }}
                ></i>
              </span>
              <span className="main__list-text">Soporte 24/7</span>
            </li>
            <li className="main__list-item">
              <span className="main__list-icon">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#34c954" }}
                ></i>
              </span>
              <span className="main__list-text">Instrucciones de uso</span>
            </li>
            <li className="main__list-item">
              <span className="main__list-icon">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#34c954" }}
                ></i>
              </span>
              <span className="main__list-text text__red">
                Devolución gratuita en 4 semanas
              </span>
            </li>
            <li className="main__list-item">
              <span className="main__list-icon">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#34c954" }}
                ></i>
              </span>
              <span className="main__list-text text__red">
                ENVÍO GRATUITO EN 1-2 DÍAS
              </span>
            </li>
            <li className="main__list-item">
              <span className="main__list-icon">
                <i
                  className="fa-solid fa-circle-check"
                  style={{ color: "#34c954" }}
                ></i>
              </span>
              <span className="main__list-text text__red">
                PAGO SÓLO AL RECIBIR EL PRODUCTO
              </span>
            </li>
          </ul>
          <div className="arrows">
            <img
              className="main__img arrows"
              max-width="193"
              max-height="145"
              src={arrows}
              alt="arrows"
              loading="lazy"
            ></img>
          </div>
          <div className="" id="form">
            <h4 className="form__title">RELLENA EL FORMULARIO</h4>
            <p className="form__text">
              Contactaremos contigo en un plazo de 24 horas para responder a tus
              preguntas y confirmar tu pedido.
            </p>
            <form action="api.php" method="POST" className="form">
              <div className="form__wrapper">
                <div className="form__input_wrapper">
                  <input
                    type="hidden"
                    name="subid"
                    value="2aa6as64lmq5d"
                  ></input>
                  <input type="hidden" name="formId" value="2"></input>
                  <input type="hidden" name="flow" value="4884"></input>
                  <input type="hidden" name="offer" value="3"></input>
                  <input type="hidden" name="country" value="PE"></input>
                  <input
                    type="hidden"
                    name="currency"
                    value="149.00 pen"
                  ></input>
                  <input type="hidden" name="gсlid" value="{gсlid}"></input>
                  <label htmlFor="name">
                    <i>Tu nombre y apellido</i>
                  </label>
                  <input
                    className="form__input-desc"
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Nombre"
                  />
                </div>
                <div className="form__input_wrapper">
                  <label htmlFor="name">
                    <i>Número de teléfono</i>{" "}
                  </label>
                  <input type="tel" name="tel" id="tel" required></input>
                </div>
                <Button onClick={() => handleFormSubmit()} />
                <div className="form__icons">
                  <img
                    max-width="485"
                    height="110"
                    src={icons}
                    alt="icons"
                    loading="lazy"
                  ></img>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export { Main };
