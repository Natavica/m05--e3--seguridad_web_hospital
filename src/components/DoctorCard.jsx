import React from "react";
import PropTypes from "prop-types";
import "./DoctorCard.css";

// Componente DoctorCard
const DoctorCard = ({ name, specialty, yearsOfExperience }) => {
  return (
    <div className="doctor__card">
      <p className="doctor__card--name">{name}</p>
      <p className="doctor__card--speciality">Especialidad: {specialty}</p>
      <p className="doctor__card--experience">
        Años de experiencia: {yearsOfExperience}
      </p>
    </div>
  );
};

// Definimos los PropTypes para las propiedades que recibe el componente
DoctorCard.propTypes = {
  name: PropTypes.string.isRequired, // Asegura que name sea un string
  specialty: PropTypes.string.isRequired, // Asegura que specialty sea un string
  yearsOfExperience: PropTypes.number.isRequired, // Asegura que yearsOfExperience sea un número
};

export default DoctorCard;