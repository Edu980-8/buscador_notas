import React, { useState } from "react";
import "./App.css";

function App() {
  const [nota, setNota] = useState("");
  const [notas, setNotas] = useState([]);

  const agregarNota = () => {
    if (nota.trim() !== "") {
      setNotas([...notas, nota]);
      setNota("");
    }
  };

  const eliminarNota = (index) => {
    const nuevasNotas = [...notas];
    nuevasNotas.splice(index, 1);
    setNotas(nuevasNotas);
  };

  return (
    <div className="App">
      <input
        className="text_input"
        placeholder="Agregue su nota"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />
      <h3 className="descripcion">
        Recuerde que para agregar una nota debe seleccionar el botón agregar
      </h3>
      <p className="parrafo_nota">La nota que deseas agregar es: {nota} ?</p>
      <div className="container_buttons">
        <button className="success" type="submit" onClick={agregarNota}>
          +
        </button>
      </div>
      {notas.length > 0 && (
        <table className="tabla_notas">
          <thead>
            <tr>
              <th>Índice</th>
              <th>Nota</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{nota}</td>
                <td>
                  <button
                    className="danger"
                    onClick={() => eliminarNota(index)}
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
