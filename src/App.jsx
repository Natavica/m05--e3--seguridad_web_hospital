// //Aquí se coordina el flujo de datos entre DoctorList y AppointmentForm y se administran los estados globales
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DoctorCard from "./components/DoctorCard";
import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. José Pérez",
      specialty: "Cardiología",
      yearsOfExperience: 15,
    },
    {
      id: 2,
      name: "Dra. María Gómez",
      specialty: "Pediatría",
      yearsOfExperience: 10,
    },
    {
      id: 3,
      name: "Dr. Carlos Ruiz",
      specialty: "Neurología",
      yearsOfExperience: 20,
    },
    {
      id: 4,
      name: "Dr. José Pérez",
      specialty: "Cardiología",
      yearsOfExperience: 15,
    },
    {
      id: 5,
      name: "Dra. María Gómez",
      specialty: "Pediatría",
      yearsOfExperience: 10,
    },
    {
      id: 6,
      name: "Dr. Carlos Ruiz",
      specialty: "Neurología",
      yearsOfExperience: 20,
    },
    {
      id: 7,
      name: "Dr. José Pérez",
      specialty: "Cardiología",
      yearsOfExperience: 15,
    },
    {
      id: 8,
      name: "Dra. María Gómez",
      specialty: "Pediatría",
      yearsOfExperience: 10,
    },
    {
      id: 9,
      name: "Dr. Carlos Ruiz",
      specialty: "Neurología",
      yearsOfExperience: 20,
    },
  ];

  const services = ["Cardiología", "Pediatría", "Neurología"];

  // Estados
  const [selectedService, setSelectedService] = useState(""); // Servicio seleccionado
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientName: "",
    selectedDoctor: "",
    appointmentDate: "",
  }); // Detalles de la cita

  // Manejar cambios en el servicio seleccionado
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  // Manejar cambios en los detalles de la cita
  const handleAppointmentChange = (event) => {
    const { name, value } = event.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Detalles de la cita agendada:", appointmentDetails);
    alert("Cita agendada con éxito");
    setAppointmentDetails({
      patientName: "",
      selectedDoctor: "",
      appointmentDate: "",
    }); // Reiniciar formulario
  };

  // Filtrar doctores según el servicio seleccionado
  const filteredDoctors = selectedService
    ? doctors.filter((doctor) => doctor.specialty === selectedService)
    : [];

  return (
    <div className="App">
      <Navbar />
      <div className="app_content">
        <h1>Bienvenido al Hospital</h1>

        <h2>Doctores Disponibles</h2>
        <div className="doctor__card_container">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} {...doctor} />
          ))}
        </div>

        <ServiceList
          services={services}
          handleServiceChange={handleServiceChange}
        />

        {/* Componente AppointmentForm para agendar una cita */}
        <AppointmentForm
          doctors={filteredDoctors} // Solo doctores filtrados
          appointmentDetails={appointmentDetails}
          handleAppointmentChange={(e) =>
            setAppointmentDetails({
              ...appointmentDetails,
              [e.target.name]: e.target.value,
            })
          }
          handleSubmit={(e) => {
            e.preventDefault();
            console.log("Cita agendada:", appointmentDetails);
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;


