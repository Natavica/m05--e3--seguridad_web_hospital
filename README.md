# 🏥 Hospital Web App  
**Aplicación de Gestión Hospitalaria con React, TypeScript y Seguridad Front-End**

Esta aplicación web ha sido desarrollada para gestionar de manera eficiente la información de un hospital, incluyendo pacientes, doctores y citas médicas. Está construida con **React** y **TypeScript**, y se enfoca en buenas prácticas de desarrollo como el consumo de APIs, la integración de seguridad en el front-end y la optimización del rendimiento con Hooks.

---

## 🔗 Consumo de APIs con Fetch API o Axios

La aplicación se comunica con una base de datos mediante **solicitudes HTTP (GET, POST, PUT y DELETE)** utilizando Fetch API o Axios. Esta integración permite gestionar todos los recursos del hospital, como pacientes, citas y personal médico. 

Los datos recuperados se renderizan dinámicamente en la interfaz de usuario, permitiendo una experiencia fluida e interactiva. Además, se implementó un sistema robusto de manejo de errores para asegurar que, en caso de fallas en la red o errores del servidor, los usuarios reciban mensajes claros y amigables que expliquen lo ocurrido.

---

## 📦 Uso de TypeScript en Componentes Clave

El proyecto ha sido refactorizado para integrar **TypeScript**, lo que permite una mayor seguridad y control durante el desarrollo. Los componentes principales fueron actualizados para incluir definiciones estrictas de tipos, tanto para props como para estados.

También se definieron **interfaces y clases** para modelar correctamente los datos del sistema, como la información de usuarios, doctores y pacientes. Gracias al tipado fuerte de TypeScript, se reducen significativamente los errores en tiempo de ejecución y se mejora la legibilidad y mantenibilidad del código.

---

## 🛡️ Seguridad en el Front-End

Se implementaron varias medidas para asegurar la aplicación desde el lado del cliente. A través del uso de **React Router DOM**, se protegieron rutas que solo pueden ser accedidas por usuarios autenticados.

Además, las peticiones a la API están protegidas mediante **JWT (JSON Web Tokens)**, asegurando que solo los usuarios con los permisos adecuados puedan acceder a la información sensible. También se integraron validaciones de formularios para prevenir ataques como **XSS**, y se añadió encriptación para proteger los datos confidenciales antes de enviarlos al servidor.

---

## ⚙️ Optimización con Hooks y Manejo de Errores

El manejo del estado y los efectos secundarios se realiza con **Hooks** como `useState` y `useEffect`. Para evitar duplicación de lógica, se desarrollaron **Hooks personalizados** que encapsulan funcionalidades comunes, como el control de autenticación o la gestión de formularios.

La gestión de errores también fue optimizada: cualquier fallo durante las peticiones o la interacción del usuario se detecta y se comunica de manera clara. Además, se aplicaron técnicas para **mejorar el rendimiento**, como el uso correcto de dependencias en `useEffect` y la prevención de renderizados innecesarios.

---

## 🧰 Tecnologías Utilizadas

- **React**
- **TypeScript**
- **Axios / Fetch API**
- **React Router DOM**
- **JWT**
- **Tailwind** (o estilos personalizados)

---
