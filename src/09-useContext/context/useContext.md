El Hook de React useContext es una herramienta fundamental que permite a los componentes suscribirse a cambios de contexto y acceder al valor de un contexto de manera eficiente, evitando el tedioso "prop drilling" (pasar props a través de múltiples niveles de componentes intermedios que no las necesitan).

🎯 Propósito Principal
Evitar el Prop Drilling: Simplifica el proceso de compartir datos (como temas, estado de autenticación, o configuraciones) que se consideran "globales" para un árbol de componentes de React.

🛠️ Conceptos Clave

1. El Contexto (Context)
   Antes de usar useContext, primero debes crear un objeto Contexto.

Se crea usando la función React.createContext().

Sintaxis: const MiContexto = React.createContext(valorInicial);

Este objeto contiene dos componentes esenciales:

MiContexto.Provider: El componente que proporciona el valor. Se coloca en un nivel superior del árbol de componentes.

MiContexto.Consumer (Clásico/No Hook): Una forma antigua de consumir el valor (ahora reemplazada por useContext).

2. El Proveedor (Provider)
   Función: Envuelve el subárbol de componentes que necesitan acceder al contexto.

Propiedad Clave: Recibe una prop value (<MiContexto.Provider value={misDatos}>) que contiene los datos que deseas compartir. Cualquier cambio en este value provocará un re-render en los componentes que usen useContext de ese contexto.

3. El Hook useContext
   Función: Es el Hook que permite a un componente funcional leer el valor actual de un contexto.

Sintaxis: const valorActual = useContext(MiContexto);

Argumento: Recibe el objeto Contexto que se creó con createContext().

Retorno: Retorna el valor actual que le fue pasado a la prop value del Provider más cercano en el árbol.

✍️ Flujo de Uso (El Pattern)
Creación: Crea el objeto Contexto: const UserContext = createContext(null);

Provisión: Envuelve tu aplicación (o la parte necesaria) con el Provider, pasándole los datos:

<UserContext.Provider value={{ nombre: 'Fernando', tema: 'dark' }}>
<App />
</UserContext.Provider>

Consumo: En cualquier componente hijo, usa el Hook para acceder a los datos directamente, sin importar la profundidad:

const MiComponente = () => {
const { nombre, tema } = useContext(UserContext); // Acceso directo!
// ... utiliza nombre y tema
}
⚠️ Puntos a Considerar
Re-renderizado: Un cambio en la propiedad value del Provider provocará un re-render de todos los componentes que usan useContext para ese contexto, incluso si solo una pequeña parte del valor ha cambiado. Esto es algo a optimizar en aplicaciones grandes, a menudo combinando useContext con useState o useReducer en el Provider.

Valor por Defecto: El valorInicial que se pasa a createContext(valorInicial) solo se usa cuando un componente intenta acceder al contexto sin un Provider por encima en el árbol.

Separación: Es una buena práctica separar la creación del contexto y el componente Provider en archivos diferentes para mantener el código limpio.
