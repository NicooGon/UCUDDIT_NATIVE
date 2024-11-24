# Intrucciones

## Tener instalado:

- PostgreSQL versión 17
- pgAdmin 4 v8.12 (o cualquier gestor de base de datos de preferencias)
- Tener un Script en la base de datos llamado "ucuddit"
- Node.js versión 21.6.2.
- IntelliJ IDEA: Versión 2024.2.3
- React Native versión 0.76.2
- Expo SDK: Versión 52.0.7
- Git, para clonar el repositorio que contiene el código fuente del proyecto
- Expo Go SKD 51: Aplicación móvil necesaria para ejecutar la aplicación mobile en un dispositivo físico

## Pasos para la instalación:

- Clonar el proyecto usando git clone <URL del repositorio>

### Configuracion del front (React Native):

- Luego de clonado el repositorio, abrir el proyecto en Visual Studio (o cualquier IDE de preferencia) y ejecutar el comando 'npm install' para instalar todas las dependencias utilizadas.

### Configuración y ejecución del backend:

- En postgres tener la base de datos creada con el nombre "ucuddit" y haber ejecutado el script
- Ejecuta el backend desde IntelliJ IDEA y déjalo funcionando en segundo plano para que la aplicación móvil pueda conectarse a él. Las entidades en la base de datos se crearan automaticamente al ejecutar el backend.

### Ejecución del proyecto mobile:

- Desde la carpeta del front, ejecutar el siguiente comando para iniciar la aplicación móvil: `npm start`.
- Esto mostrará en tu consola un QR y la dirección IP de tu computadora junto con un puerto de React Native.
- Copie la dirección IP sin el puerto y modifica todas las variables “ipAdress” en el código del proyecto, reemplazando el valor entre comillas con tu dirección IP local (por ejemplo, 192.168.x.x) y guarda los cambios. Esto permitirá que la aplicación se conecte al backend.
- Descarga y abre la aplicación Expo Go en tu dispositivo móvil, escanea el código QR generado, y la aplicación se ejecutará automáticamente (Asegurate de estar conectado a la misma red en tu dispositivo movil y computadora).


## Arquitectura:

### Frontend:

La arquitectura del frontend de mi sistema se basa en el patrón de diseño Component-Based Architecture (Arquitectura basada en componentes), el mismo da enteneder que el proyecto está compuesto de componentes reutilizables y bien delimitados en responsabilidad. Además, el código está estructurado en carpetas especificas separando el código y lógica de `.js` en componentes y app.

[Arquitectura del backend](https://github.com/NicooGon/UCUDDIT\_backend)

## Decisiones Técnicas:

Uso de react navigation para utilizar rutas dinamicas y Stack (para navegar con animaciones). Ademas se incluyeron las tabs, las cuales me parecen necesarias para el estilo de la aplicacion.

No fue necesario el uso de useContext debido a que no hay prop drealing.

Fue necesario el uso de dropdown-picker para realizar una select list de communities, debido a que react-native no tiene un componente similar.


