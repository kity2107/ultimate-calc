import { Contenedor, Cont, Cont1 } from "./styleDisplay";

function Display({ mostrar, memoria, setDisplayMem, operacion }) {
  const mem = localStorage.getItem("memory");
  if (mem > 0) {
    setDisplayMem("M");
  }

  return (
    <div>
      <Cont>{memoria}</Cont>
      <Cont1>{operacion}</Cont1>

      <Contenedor>{mostrar ? mostrar : "0"}</Contenedor>
    </div>
  );
}
export default Display;
