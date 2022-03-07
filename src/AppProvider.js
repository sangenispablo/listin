import { createContext, useContext, useReducer } from "react";

// Creo el contexto para toda mi app
const AppContext = createContext();

// Creo un custom Hook para poder hacer que los componentes usen este Hook para acceder a los datos
// de lo contrario deberia usar el useContext en cada componente que necesite los datos
const useAppContext = () => {
  return useContext(AppContext);
};

// Al initialState lo ponemos afuera
const initialState = {
  productos: [],
  presupuesto: 5000,
};

// Funcion reductora
const reducer = (state, action) => {
  switch (action.type) {
    case "AGREGAR_PRODUCTO": {
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };
    }

    default:
      break;
  }
  return state;
};

const AppProvider = ({ children }) => {
  // Aca comienza lo diferente a la forma comun de usar context
  // Vamos a usar un Reducer

  const [state, dispatch] = useReducer(reducer, initialState);

  // Con el AppContext devuelvo un componente Provider que va a envolver a los componentes
  // que necesiten acceso a los datos que tiene el context para compartir
  return (
    <AppContext.Provider
      value={{
        productos: state.productos,
        presupuesto: state.presupuesto,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
