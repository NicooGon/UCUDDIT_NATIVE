#Instrucciones

##Antes de comenzar, asegúrate de tener instalados los siguientes programas y herramientas:

-PostgreSQL versión 17.
-pgAdmin 4 v8.12 (o cualquier gestor de base de datos de tu preferencia).
-Un script en la base de datos llamado "ucuddit".
-Node.js versión 21.6.2.
-IntelliJ IDEA: versión 2024.2.3.
-React Native versión 0.76.2.
-Expo SDK: versión 52.0.7.
-Git, para clonar el repositorio con el código fuente del proyecto.
-Expo Go SDK 51: aplicación móvil necesaria para ejecutar la aplicación en un dispositivo físico.

##Pasos para la instalación

Clonar el proyecto
Clona el repositorio del proyecto utilizando el siguiente comando:
'git clone <URL del repositorio>'

##Configuración del front (React Native)
-Una vez clonado el repositorio, abre el proyecto en Visual Studio Code (o cualquier IDE de tu preferencia).
-En la terminal del proyecto, ejecuta el comando:
'npm install'
-Esto instalará todas las dependencias necesarias para el correcto funcionamiento del proyecto.

##Configuración y ejecución del backend
=Crea una base de datos en PostgreSQL con el nombre "ucuddit".
=Ejecuta el script proporcionado para cargar la estructura inicial de la base de datos.
=Abre el backend en IntelliJ IDEA y ejecútalo. Esto generará automáticamente las entidades en la base de datos y permitirá que la aplicación móvil se conecte al servidor.
=Ejecución del proyecto móvil

##Desde la carpeta del frontend, abre una terminal y ejecuta:
'npm start'
-Esto mostrará un código QR en la consola, junto con la dirección IP de tu computadora y un puerto de React Native.
-Copia la dirección IP (sin el puerto) y reemplázala en todas las variables ipAdress dentro del código del proyecto. Guarda los cambios. Esto es necesario para que la aplicación pueda conectarse al backend.
-Descarga la aplicación Expo Go en tu dispositivo móvil, escanea el código QR generado y la aplicación se ejecutará automáticamente.
-Nota: Asegúrate de que tu dispositivo móvil y computadora estén conectados a la misma red.

##Arquitectura
El frontend del sistema sigue el patrón de diseño Component-Based Architecture (Arquitectura basada en componentes). Esto significa que el proyecto está compuesto por componentes reutilizables,
con responsabilidades bien definidas. Además, el código está organizado en carpetas específicas que separan la lógica y los archivos .js en componentes y la carpeta principal de la aplicación.

##Backend
Para más detalles sobre la arquitectura del backend, puedes consultar el siguiente enlace:
[Arquitectura del backend](https://github.com/NicooGon/UCUDDIT_backend)

##Decisiones técnicas
-Se utilizó React Navigation para manejar rutas dinámicas y un Stack Navigator, lo que permite realizar transiciones con animaciones suaves entre pantallas. Además, se incorporaron tabs para mejorar la navegación y el estilo de la aplicación.
-No fue necesario utilizar useContext, ya que no se encontraron casos de prop drilling en el proyecto.
-Se empleó Dropdown Picker para implementar una lista desplegable de comunidades, ya que React Native no cuenta con un componente similar de manera predeterminada.
