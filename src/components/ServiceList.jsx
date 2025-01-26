import React from "react";
import PropTypes from "prop-types"; // Importa PropTypes


const ServiceList = ({ services, handleServiceChange }) => {
  return (
    <div className="service__list">
      <h2>Servicios Médicos Disponibles</h2>
      <select onChange={handleServiceChange}>
        <option value="">Seleccionar servicio...</option>
        {services.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

//DEfinimos los PropTypes para las propiedades que recibe el componente

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired, // El componente espera un array de strings
  handleServiceChange: PropTypes.func.isRequired, // El componente espera una función
};

export default ServiceList;

