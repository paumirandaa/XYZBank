# Introducción
Este proyecto emplea Cypress con Cucumber (Gherkin) para automatizar los casos de prueba del sitio web "GlobalSqa - XYZ Bank".

# Cómo Comenzar

# 💻 Pre-requisites

1. Node JS


## Instalación de dependencias

Luego de clonar o descargar el repositorio, emplear la consola/terminal y escribir:

> npm install

Se auto-generará una carpeta denominada "node-modules" con los archivos necesarios para poder ejecutar los tests.

## Ejecución de tests

Para correr los test de manera local, con ventana de ejecución, en la consola/terminal escribir:

> npm run cypress:open


# Proyecto

## Estructura del Proyecto

El proyecto contiene la siguiente estructura de carpetas:

- **cypress:** Carpeta principal del proyecto que contiene los tests escritos en Gherkin, page object, definición de los pasos.
  - **e2e**: Carpeta que contiene todos los tests end to end.
    - **features**: Carpeta que contiene todos los tests escritos en Gherkin
    - **step_definition:** Carpeta que contiene la definición de cada paso de los tests.
  - **fixtures:** Archivos json que contienen información para verificar en los tests (principalmente tests de servicio)
  - **pages:** Page object. Archivos con los locadores de los elementos necesarios en los tests.
  - **support:** Comandos genéricos necesarios para los tests.
- **.gitignore**: Archivos o carpetas que no se desean versional
- **cypress.config.js:** Archivo que contiene la configuración de URL, dependecias y plugins.
- **package:** Listado de dependencias npm necesarias para el proyecto.
- **Readme:** Documentación principal del proyecto de automation.

## Configuraciones Básicas

[Configuración](https://docs.cypress.io/guides/references/configuration)

**cypress.config.js** es el archivo utilizado para guardar cualquier configuración específica de Cypress.

Contiene:

- **setupNodeEvents:** Función en la que se pueden registrar eventos de nodos y modificar la configuración. Lo que en versiones de cypress 9 o anterior se configuraba en "Plugins", ahora debe configurarse en este sitio.
- **specPattern:** Tipo de archivos que conforman las pruebas (.feature)
- **chromeWebSecurity:** Al desabilitarlo permite cargar sitios cuya url de origen es diferente de la url que se está testeando (muchas páginas emplean otros dominios para el login o imágenes por ejemplo).
