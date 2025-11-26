//¿Qué es una SPA (Single Page Application)?

// Una SPA es una aplicación web que carga una sola página HTML y actualiza dinámicamente
// su contenido mediante JavaScript, sin recargar toda la página cada vez que el usuario
//  navega.

//En lugar de pedir al servidor una nueva página completa cada vez que cambiás de sección,
//  solo se actualiza la parte del contenido que cambia, lo que hace que la navegación sea
//  más rápida y fluida.



//¿Cómo funciona internamente?

//* El servidor envía una única página index.html.

//* React (o el framework SPA) toma el control del navegador mediante 
// el DOM virtual (Virtual DOM).
// * A medida que el usuario navega, React:
// * Cambia el contenido mostrado.
//* Actualiza la URL mediante el History API (pushState, replaceState) 
// sin recargar la página.
// * Maneja las “rutas” internamente (por eso se usa react-router-dom).


//VENTAJAS DE UNA SPA
// - VELOCIDAD
// - MEJOR EXPERIENCIA DE USUARIO
// -  REUTILIZACION DE COMPONENTES
// - MENOR CARGA DEL SERVIDOR


//QUE APRENDEMOS EN ESTA SECCIOIN DEL CURSO?
//que React por si solo no maneja rutas, sino que renderiza componentes
//para convertir tu app en una SPa real necesitas usar react-rounter-dom
//aprendemos a: crear rutas sin reecargar la pagina, usar <BrownserRouter> <Routes>y <Route> y navegar con <Link> o el hook Usenavegtae


