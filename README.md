## TypeORM
### Introducción
En este proyecto implementamos las operaciones de CRUD ( Crear, Leer, Actualizar, Eliminar) mediante este crearemos  una aplicación backend ecalable y mantenible. 
Primero tenemos que asegurarnos de tener  instalado Node.js y npm instalados en nuestra maquina, tenemos que seguir varios pasos para la implementacion de nuestro CRUD :
`npm install -g @nestjs/cli`: Este comando instala globalmente la interfaz de línea de comandos (CLI) de Nest.js. La CLI de Nest.js facilita la creación, gestión y generación de aplicaciones Nest.js y sus componentes.
`nest new nest-crud-or`: Este comando utiliza la CLI de Nest.js (@nestjs/cli) para crear un nuevo proyecto Nest.js llamado nest-crud-tutorial. La CLI generará la estructura inicial del proyecto con configuraciones predefinidas, como archivos de configuración, carpetas y una aplicación base.
`cd nest-crud-or`: Este comando cambia el directorio de trabajo actual al directorio nest-crud-or, que es el directorio raíz del proyecto Nest.js recién creado.
`npm install @nestjs/typeorm typeorm`:Este comando instala las dependencias necesarias para integrar TypeORM con una aplicación Nest.js.
@nestjs/typeorm es un módulo que proporciona integración entre Nest.js y TypeORM, permitiendo utilizar TypeORM dentro de una aplicación Nest.js de manera fácil y eficiente.
typeorm es la biblioteca principal de TypeORM, que facilita el mapeo de objetos JavaScript a entidades de base de datos y la realización de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos. 
`npm install pg`:Este comando instala el controlador (driver) para PostgreSQL en Node.js.
pg es el controlador oficial de PostgreSQL para Node.js. Permite que una aplicación Node.js se conecte y comunique con una base de datos PostgreSQL.
## Desarrollo
Despues de seguir todos los pasos anteriores y saber para que sirve cada uno vamos ha hanlar un poco sobre `Configuring the database:`Este archivo  es la configuración de conexion para  nuestra base de datos, Estas variables de entorno son comunes en el desarrollo de aplicaciones para proporcionar configuraciones flexibles y seguras que pueden variar según el entorno (desarrollo, pruebas, producción, etc.) sin necesidad de modificar el código fuente. Sin embargo, es importante revisar y corregir la configuración de la contraseña (POSTGRES_PASSWORD) para que sea segura y funcional.
`Creating Resource For Creatures: `
Para comenzar a genera codigo vamos ha nuestra terminal y escrbir nest g resource creatures esto generara nuestra dtos,entity,controller and service, esto nos sera util ya que sera nuestra funcionalidad para poder manejar a CRUD.
`Crear entidad:` Definamos nuestro modelo de datos creando una entidad usando TypeORM. En nuestro modulo creature.entity.ts: Esta entidad representa una estructura de datos que se mapeará a una tabla en una base de datos relacional, lo que facilita la interacción entre objetos en tu aplicación y las filas en la base de datos.
`Agregar validación:` Tenemos que validar una validacion para nuestro manejo de errores en la cual trabajamos con main.ts, instalamos npm install class-validator.
` creación del servicio`: Debemos crear un servivio que interactue con nuetra base de datos, debemos inicializar un respositorio que se creara mediante la inyeccion de dependencias.
Este servicio (CreatureService) encapsula la lógica para interactuar con la entidad UserEntity en la base de datos utilizando TypeORM. Proporciona métodos para crear, leer, actualizar y eliminar (CRUD) usuarios, abstrayendo las operaciones de base de datos detrás de una interfaz fácil de usar que puede ser consumida por otros componentes de la aplicación Nest.js. Esto facilita el desarrollo de aplicaciones robustas y mantenibles utilizando TypeScript y Nest.js.
`Crear controlador`: Este controlador encapsula la lógica para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con las criaturas en una aplicación Nest.js. Proporciona endpoints HTTP para interactuar con las criaturas, delegando la lógica de negocio específica a un servicio (CreaturesService) dedicado. Este enfoque sigue los principios de arquitectura de Nest.js y facilita el desarrollo de APIs RESTful de manera estructurada y mantenible.
`Cableando todo junto`:Nest.js utiliza la inyección de dependencia para administrar los componentes de la aplicación. Asegúrese de importar y registrar sus servicios y controladores en creatures.module.ts el archivo.

### Conclusión

En mi caso escogeria Prisma por que en si al final no se me hizo nada facil poder migrar los datos a Railway de TypOrm y por que en en Prisma proporciona una API de alto nivel con consultas intuitivas y autocompletadas que se basan en la estructura de tu esquema de base de datos definido en un archivo schema.prisma. La generación de código y la validación de consultas ocurren en tiempo de compilación, lo que facilita la detección temprana de errores.
Prisma: Prisma ofrece herramientas integradas para la generación y aplicación de migraciones de base de datos. Las migraciones se generan automáticamente a partir de los cambios en el esquema de Prisma y se aplican de manera controlada.
TypeORM: Admite migraciones de base de datos, pero requiere que los desarrolladores definan manualmente las migraciones utilizando comandos de CLI o escribiendo scripts personalizados para manejar los cambios de esquema.

[MiWeb](https://youtu.be/cHeJ9TOinWs)