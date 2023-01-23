
E-commerce: New Computer
Este proyecto es el trabajo final del curso sobre React de Coderhouse. Fue creado con React App + Vite.

Scripts disponibles
Se pueden ejecutar en el directorio del proyecto:

npm run dev
Corre la aplicacion en modo de desarrollo.
Abra http://localhost:5173 para verla en el navegador.


Pre-requisitos
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/es/) y npm en version superior a la 16.
Estructura de carpetas y archivos
- La carpeta `src` contiene todo el codigo correspondiente a la aplicacion de React, y contiene toda la funcionalidad de la misma.
    - La carpeta `Components` almacena todos los componentes que forman parte de la aplicacion, tales como la cabecera y el NavBar, el footer, los componentes contenedores, los contextos y la funcionalidad del carrito de compras; así como los componentes de UI que muestran los productos y permiten la interaccion del usuario.
- En la carpeta `Pages` se encuentran las secciones principales de la aplicacion entres las cuales se puede navegar para acceder a las propiedades disponibles.
- En la carpeta `Public` se albergan las imagenes e iconos uitlizados en el UI de la aplicacion.
- En `Firestore` se pueden encontrar los componentes que configuran el acceso a la base de datos de Firestore, la cual almacena los productos mostrados en la tienda, y guarda las ordenes de los usuarios que realizaron una compra.
- Los archivos de estilo `.css` se encuentran en las carpetas correspondientes a cada componente, en adicion al archivo principal `App.css`ubicado en la raiz del proyecto.
- El archivo `App.jsx` es el punto de inicio de la aplicacion de React.
Funcionalidad y caracteristicas
La aplicacion simula la tienda en la nube de un local de computaciòn y tecnologìa llamada "NewComputer". La app cuenta con dos secciones principales, una correspondiente a la pagina de inicio yvisualizacion de productos y la ultima que permite al usuario contactarse con la empresa. Se puede acceder al catalogo de productos, ver las caracteristicas de cada uno de ellos, agregarlo al carrito y realizar la simulacion de una compra.

Se implemento Firestore de Firebase para almacenar la coleccion de productos, a la cual se realizan las consultas necesarias para acceder a la informacion. Una vez confirmada la compra se almacenan en otra coleccion los documentos con la descripcion de la compra realizada.

Se utilizaron diversos componentes para generar el UI y implementar el codigo que permite la funcionalidad de la App. Se uitlizaron los principales recurso de React, tales como los hooks, los contextos, los Routers para la navegacion y diferentes tecnicas de rendering condicionales.

El resultado es un simulador de una tienda con todas las funcionalidades comunes correspondientes a un e-commerce.
