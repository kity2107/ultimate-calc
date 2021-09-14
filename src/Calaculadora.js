import { useState } from "react";
import Display from "./components/Display/index";
import Keypad from "./components/Keypad/index";

function Calculadora() {
  //creo el estado principal de componente padre "calculadora"
  const [display, setDisplay] = useState("0");
  const [displayMem, setDisplayMem] = useState("");
  const [displayOper, setDisplayOper] = useState("");
  //luego le  paso como props los estados a los componentes hijos
  //en el caso puntual de keypad le paso tambien el setDisplay ya q voy a actualizar el estado con este

  return (
    <div className="calculadora">
      <Display
        mostrar={display}
        memoria={displayMem}
        setDisplayMem={setDisplayMem}
        operacion={displayOper}
      />

      <Keypad
        display={display}
        setDisplay={setDisplay}
        setDisplayMem={setDisplayMem}
        displayOper={displayOper}
        setDisplayOper={setDisplayOper}
      />
    </div>
  );
}

export default Calculadora;
