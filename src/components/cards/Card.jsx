import React from "react";
import "./assets/Cards.css";

/**
 * @param {string} title Título principal de la tarjeta
 * @param {string} description Descripción o subtítulo
 * @param {Array<string>} items Arreglo de textos para cada ítem de la lista
 * @param {string} buttonLabel Texto del botón
 * @param {Function} onButtonClick Función a ejecutar al hacer click en el botón
 * @param {React.ReactNode} children Cualquier elemento JSX que quieras pasar como contenido adicional
 */

const Card = ({
  title = "",
  description = "",
  items = [
    "10 Launch Weeks",
    "10 Influencers Post",
    "100.000 Views",
    "10 Reddit Posts",
    "2 Hours Marketing Consultation",
  ],
  buttonLabel = "Book a Call",
  onButtonClick = () => {},
  children,
}) => {
  return (
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title">{title}</span>
        <p className="card_paragraph">{description}</p>
      </div>
      <hr className="line" />
      {items.length > 0 && (
        <ul className="card__list">
          {items.map((item, index) => (
            <li key={index} className="card__list_item">
              <span className="check">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="check_svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="list_text">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Si se desean renderizar hijos adicionales entre la lista y el botón */}
      {children && children}

      <button className="button" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;