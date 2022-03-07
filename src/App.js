import { Presupuesto } from "./components/Presupuesto";
import { Formulario } from "./components/Formulario";
import { Lista } from "./components/Lista";
import { AppProvider } from "./AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <div className="container mt-3">
        <Presupuesto />
        <Formulario />
        <hr />
        <Lista />
      </div>
    </AppProvider>
  );
};
