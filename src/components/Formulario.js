import { useState } from "react";
import { useAppContext } from "../AppProvider";

export const Formulario = () => {
  const { dispatch } = useAppContext();

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const producto = {
      nombre,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio),
    };
    dispatch({
      type: "AGREGAR_PRODUCTO",
      payload: producto,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Producto</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Cantidad</label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setCantidad(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          className="form-control"
          step="0.01"
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-primary d-block" value="Enviar" />
    </form>
  );
};
