# Ejercicio Práctico: Manejo Avanzado del DOM y Elementos ReactJS para el Proyecto del Hospital

En este ejercicio práctico, los estudiantes profundizarán en el manejo del DOM virtual, el uso de referencias para manipular elementos del DOM, y la integración de componentes avanzados en ReactJS. Implementarán funcionalidades avanzadas en el sistema del hospital, como la gestión del DOM en el cliente y servidor, la optimización de rendimiento, y el uso de fragmentos y componentes de orden superior para mejorar la modularidad y eficiencia del sistema.

___

El DOM Virtual es una representación ligera del DOM real en memoria. React utiliza esta representación para calcular eficientemente los cambios necesarios en la interfaz de usuario. Aquí está cómo ayuda:

**Comparación eficiente:** React compara la versión anterior del DOM Virtual con la nueva (proceso llamado reconciliation). Solo actualiza los elementos que han cambiado, en lugar de renderizar todo el DOM real.

**Menos operaciones costosas:** Modificar el DOM real es una operación costosa. Al minimizar estas actualizaciones, React mejora significativamente el rendimiento, especialmente cuando hay muchas interacciones o actualizaciones frecuentes.

**Reutilización de componentes:** React reutiliza componentes ya renderizados siempre que sea posible, lo que ahorra recursos.

## Características

1. **Componentes Reutilizables**:
   - `DoctorCard`: Muestra la información de un doctor (nombre, especialidad, años de experiencia).
   - `ServiceList`: Lista los servicios médicos disponibles en el hospital.
   - `AppointmentForm`: Formulario para agendar citas con un doctor.

2. **Hooks en React**:
   - **`useState`**: Se usa para manejar los estados de los formularios y los datos (nombre del paciente, doctor seleccionado, fecha de la cita, servicio seleccionado).
   - **`useEffect`**: Se utiliza para cargar los doctores y servicios cuando el componente principal (`App`) se monta en el DOM.

3. **Flujo del Proyecto**:
   - Los datos de los doctores y servicios se cargan y se pasan como `props` entre componentes.
   - Los formularios permiten a los usuarios ingresar sus datos y agendar citas, que se muestran en la consola y en una alerta.

---

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Hooks**: `useState` y `useEffect` para gestionar el estado y el ciclo de vida de los componentes.
- **JSX**: Sintaxis para definir la estructura visual de los componentes.
- **CSS**: Estilos básicos para la aplicación.

---

## Estructura del Proyecto

```plaintext
/src
  └── /components
      ├── DoctorCard.jsx        # Componente para mostrar la información del doctor.
      ├── ServiceList.jsx       # Componente para mostrar la lista de servicios.
      └── AppointmentForm.jsx   # Componente para el formulario de citas.
  ├── App.jsx                   # Componente principal que maneja el estado y los efectos.
  └── App.css                   # Estilos básicos para la aplicación.
```


---

## Pasos para Ejecutar el Proyecto

1. **Clonar el repositorio**:
   ```bash
      git clone https://github.com/natavica/m04--e2--componentes_basicos_react.git
      cd m04--e2--componentes_basicos_react

2. **Instalar dependencias**:
    ```bash
      npm install

3. **Iniciar el servidor de desarrollo**:
    ```bash
      npm run dev

4. **Abrir la aplicación**: Abre tu navegador y accede a http://localhost:5175 para ver la aplicación en acción.


---

## Detalles de Implementación

1. **DoctorCard Component**
Este componente recibe como props los datos de un doctor (nombre, especialidad, años de experiencia) y los muestra.
```jsx
const DoctorCard = ({ name, specialty, yearsOfExperience }) => (
  <div className="doctor-card">
    <h3>{name}</h3>
    <p>Especialidad: {specialty}</p>
    <p>Años de experiencia: {yearsOfExperience}</p>
  </div>
);
```

2. **ServiceList Component**
Este componente muestra una lista de servicios médicos disponibles y permite al usuario seleccionar uno.
```jsx
const ServiceList = ({ services, handleServiceChange }) => (
  <div className="service-list">
    <h2>Servicios Médicos Disponibles</h2>
    <select onChange={handleServiceChange}>
      <option value="">Seleccionar servicio...</option>
      {services.map((service, index) => (
        <option key={index} value={service}>{service}</option>
      ))}
    </select>
  </div>
);
```

3. **AppointmentForm Component**
Este componente muestra un formulario donde el usuario puede ingresar su nombre, seleccionar un doctor y una fecha para la cita. Los datos son gestionados mediante el estado useState y se manejan con `handleAppointmentChange`.

```jsx
const AppointmentForm = ({ doctors, appointmentDetails, handleAppointmentChange, handleSubmit }) => (
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
      {doctors.map((doctor) => (
        <option key={doctor.id} value={doctor.name}>
          {doctor.name} - {doctor.specialty}
        </option>
      ))}
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
```

4. **Uso de `useState` y `useEffect`**

- **`useState`**: Se utiliza para manejar los datos del formulario, como el nombre del paciente, el doctor seleccionado y la fecha de la cita.
- **`useEffect`**: Se utiliza para cargar la lista de doctores y servicios cuando el componente principal (`App`) se monta.
# m05--e5--mejoras-apis-typescript-seguridad
