import React from "react";
import { Button } from "./styledButton";

function Botones({ texto, isOper, handlePress }) {
  return (
    <Button
      oper={isOper}
      onClick={() => {
        handlePress(texto, isOper);
      }}
    >
      {texto}
    </Button>
  );
}

export default Botones;
