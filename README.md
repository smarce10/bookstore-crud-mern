# bookstore-crud-mern

## Descripción
Este es un CRUD de libros desarrollado utilizando el stack **MERN** (MongoDB, Express, React, Node.js). El proyecto permite realizar operaciones básicas como la creación, actualización, obtención y eliminación de libros en una librería virtual.

## Funcionalidades
- Crear un nuevo libro.
- Listar todos los libros disponibles.
- Actualizar la información de un libro existente.
- Eliminar un libro.
- Obtener un libro por su ID.

## Tecnologías utilizadas
- **Backend**: Node.js, Express, MongoDB (base de datos hosteada en un servidor)
- **Frontend**: React, TailwindCSS, Notistack
- **Otras herramientas**: Vite (para el frontend), Zod, Nodemon, CORS, Mongoose

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes programas:
- [Node.js](https://nodejs.org/) (v14 o superior)
- [MongoDB](https://www.mongodb.com/) (puedes usar un servidor MongoDB local o uno hosteado en la nube)

## Instalación y ejecución local

### Clona el repositorio
```bash
git clone https://github.com/tu-usuario/bookstore-crud-mern.git
cd bookstore-crud-mern
```

### Backend (Node.js/Express)
1. Anda al directorio del backend e instala las dependencias
```bash
cd backend/
npm install
```
2. Crea un archivo config.js dentro de la carpeta utilities, especificando el puerto donde queres que corra el backend y el URL de la base de datos, en caso de tener una en la nube, deberia quedarte algo asi:
```javascript
export const PORT = 5555;
export const mongoDBURL = '<URL_DE_TU_BASE_DE_DATOS_MONGO>';
```

3. Corre el servidor backend con el comando:
```bash
npm run dev
```

### Frontend (React)
1. Anda al directorio del frontend e instala las dependencias
```bash
cd ../frontend/
npm install
```
2. Corre el servidor frontend con el comando:
```bash
npm run dev
```
3. En la consola te va a salir el link de donde se esta levantando el frontend, copialo y abrilo en tu navegador

## Endpoints

### Crear libro
- **Método**: `POST`
- **URL**: `http://localhost:5555/books`
- **Content-Type**: `application/json`
- **Cuerpo de la solicitud**:
  ```json
  {
      "title": "Harry potter 4",
      "author": "J. K. Rowling",
      "publishYear": 2009
  }
  ```
### Modificar un libro
- **Método**: `PUT`
- **URL**: `http://localhost:5555/books/:id`
- **Content-Type**: `application/json`
- **Cuerpo de la solicitud**:
  ```json
  {
      "title": "nuevo titulo",
      "author": "nuevo autor",
      "publishYear": 2009 // nuevo año
  }
  ```
### Obtener todos los libros
- **Método**: `GET`
- **URL**: `http://localhost:5555/books`
### Obtener un libro a partir del id
- **Método**: `GET`
- **URL**: `http://localhost:5555/books/:id`
### Borrar un libro a partir del id
- **Método**: `DELETE`
- **URL**: `http://localhost:5555/books/:id`

## Arquitectura

El proyecto sigue la arquitectura MVC (Model-View-Controller):

-    **Modelos**: Definen la estructura de los datos y cómo interactúan con la base de datos.
-    **Vistas**: El frontend en React, encargado de la presentación de los datos.
-    **Controladores**: Gestionan la lógica de la aplicación y responden a las peticiones HTTP.

Además, el backend implementa el patrón de diseño **Inyección de Dependencias**, lo que permite un código más modular y testable.