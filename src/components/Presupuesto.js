import { useAppContext } from "../AppProvider";

export const Presupuesto = () => {
  const { presupuesto, productos } = useAppContext();

  const calcularSaldo = () => {
    let total = 0;
    if (productos.length > 0) {
      total = productos.reduce((amount, producto) => {
        return amount + producto.precio * producto.cantidad;
      }, 0);
    }
    console.log(total);
    return total;
  };

  return (
    <div className="alert alert-warning text-center">
      Presupuesto a gastar:
      <span className="d-block">$ {presupuesto - calcularSaldo()}</span>
    </div>
  );
};
