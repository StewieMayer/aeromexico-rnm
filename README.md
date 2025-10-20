# Rick and Morty AeroMéxico test 

## Getting Started

Para inicializar sigue las siguientes instrucciones:

- 1.- Clona el repositorio en tu equipo
- 2.- Instala las dependencias
```bash
npm i
# or
npm install
```
- 3.- Crea un archivo .env con la variable NEXT_PUBLIC_BASE_URL. Esta debe apuntar hacia el servidor de json-server. Por defecto esta en el puerto 5050 ("http://localhost:5050") pero puedes modificar el script server:start para ajustarlo a tus configuraciones.
- 4.- Para inicializar el servidor corre server:start (este script crea una db.json y levanta el servidor)
```bash
npm run server:start
```
- 5.- Para levantar la aplicacion utiliza el comando dev
```bash
npm run dev
```

## Running test

```bash
npm run test
```

## About develop time Questions

### ¿Qué es lo que más te gustó de TU desarrollo?

Me gusto mucho inmiscuirme en crear la configuración de jest, rtl y rtk dentro de una aplicación de next. Ya que fue la primera vez haciendolo para este framework. Asi mismo tambien fue divertido desarrollar fill-db.js y aprender mas sobre la organización de carpetas del api router.
En general creo que fue un ejercicio muy agradable en el que no solo demostre bien mis habilidades en react, ts, rtk, jest, gitflow, next, etc. si no tambien encontre oportunidad de aprender nuevas cosas e implementar nuevas formas de pensar un proyecto. Hace tiempo que ya no usaba css puro, por lo que tambien fue grato poder demostrar que tailwind y bootstrap no me han hecho olvidar esa habilidad.

### Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?

De haber tenido mas tiempo hubiera hecho lo siguiente:
- Definir y desarrollar las distintas interfaces para los distintos breakpoints de pantalla
- Implementar un endpoint de characters con todos los personajes haciendo un loop asincrono para consultarlos todos a traves de getCharacters({page:1})
- Implementar el endpoint de favoritos para mantener la persistencia de los mismos. Modificando el db.json y añadiendo una api de rtk query para consultarlos y una rutina para añadirlos al slice CharacterSlice
- Desarrollar todos los test unitarios para cubrir el coverage completo
- Implementar el control de errores. Diseñando la UI de los mismos y desarrollando los componentes que los implementen.
- Implementar lazy loading para las imagenes cargadas desde rickandmortyapi.com

### Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste

Hubo dos pain point que sucedieron durante el desarrollo
- La definicion de los valores dinamicos del layout para evitar que se destruya con los distintos breakpoints de la pantalla. La solucion surgio al analizar los valores predefinidos para 1920x1080 y hacer reglas de 3.
- El manejo de los estilos del scroll bar para el contenedor de los badges. Fue necesario consultar foros en linea para analizar la forma en como otros desarrolladores los manejaban. Asi mismo tambien se pidio ayuda a la IA para generar los svg de las flechas.

Tambien hubo el siguiente bug
- Next no permite usar recursos externos si no se añaden a una lista blanca. Por lo que la solución recayo en modificar next.config.ts para permitir cargar las imagenes desde rickandmortyapi.com