import { useAppContext } from "../AppProvider";

export const Lista = () => {
  const { productos } = useAppContext();

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{producto.nombre}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.precio}</td>
            <td>{producto.precio * producto.cantidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
