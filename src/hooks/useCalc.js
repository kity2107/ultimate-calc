import { useState } from "react";

const useCalc = () => {
  const [result, setResult] = useState("");

  const calcular = (oper1, displayOper, oper2) => {
    try {
      const operacion = oper1.concat(displayOper, oper2);

      const resultado = eval(operacion.replace("x", "*"))
        .toString()
        .slice(0, 10);
      setResult(resultado);
    } catch (e) {
      setResult("Error!!");
    }
  };
  return { result, calcular };
};
export default useCalc;
