import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const AppointmentForm = ({ doctors, appointmentDetails, handleAppointmentChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Agendar Cita</h2>

      <label htmlFor="patientName">Nombre del paciente:</label>
      <input
        type="text"
        id="patientName"
        name="patientName"
        value={appointmentDetails.patientName}
        onChange={handleAppointmentChange}
        required
      />

      <label htmlFor="doctor">Selecciona un doctor:</label>
      <select
        id="doctor"
        name="selectedDoctor"
        value={appointmentDetails.selectedDoctor}
        onChange={handleAppointmentChange}
        required
      >
        <option value="">Seleccionar...</option>
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.name}>
              {doctor.name} - {doctor.specialty}
            </option>
          ))
        ) : (
          <option disabled>No hay doctores disponibles</option>
        )}
      </select>

      <label htmlFor="appointmentDate">Fecha de la cita:</label>
      <input
        type="date"
        id="appointmentDate"
        name="appointmentDate"
        value={appointmentDetails.appointmentDate}
        onChange={handleAppointmentChange}
        required
      />

      <button type="submit">Agendar cita</button>
    </form>
  );
};

// Definimos los PropTypes para las propiedades que recibe el componente
AppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    yearsOfExperience: PropTypes.number.isRequired,
  })).isRequired, // Asegura que doctors sea un array de objetos con la estructura adecuada
  appointmentDetails: PropTypes.shape({
    patientName: PropTypes.string.isRequired,
    selectedDoctor: PropTypes.string.isRequired,
    appointmentDate: PropTypes.string.isRequired,
  }).isRequired, // Asegura que appointmentDetails sea un objeto con las propiedades correctas
  handleAppointmentChange: PropTypes.func.isRequired, // Asegura que handleAppointmentChange sea una función
  handleSubmit: PropTypes.func.isRequired, // Asegura que handleSubmit sea una función
};

export default AppointmentForm;

