import React, { useEffect, useState } from "react";
import Botones from "../Botones/index";
import { Contenedor } from "./styleKeypad";
import botonesSimbolos from "../../utils/botonesSimbolos";
import useCalc from "../../hooks/useCalc";

function Keypad({
  display,
  setDisplay,
  setDisplayMem,
  setDisplayOper,
  displayOper,
}) {
  const { result, calcular } = useCalc();
  const [oper1, setOper1] = useState("");
  const [oper2, setOper2] = useState("");
  const [continua, setContinua] = useState(false); //lo utilizo como bandera para saber q va a seguir usando el result para la sig. operacion
  const [igual, setIgual] = useState(false);

  // cuando cambia el result actualizo el display
  useEffect(() => {
    setDisplay(result);
    if (result !== "Error!!") {
      setOper1(result);
    }
  }, [result]);

  const handlePress = (press, oper) => {
    if (display === "Error!!") {
      //controlo el error
      if (press === "C") {
        setDisplay("");
        setDisplayOper("");
        setOper1("");
        setOper2("");
      } else {
        return;
      }
    }
    if (display.length < 11) {
      if (oper === 0) {
        //si ingreso un numero
        if (display.length === 1 && display === "0") {
          //si el display es igual a 1 y igual a "0"
          setDisplay(press);
        } else {
          if (displayOper === "") {
            if (igual === true) {
              setDisplay("");
              setDisplay(press);
              setOper1(press);
              setIgual(false);
            } else {
              //si todavia no se apreto ningun signo
              setDisplay(`${display}${press}`);
              setOper1(`${display}${press}`);
            }
          } else {
            if (continua === true) {
              setDisplay("");
              setContinua(false);
              setDisplay(press); //se muestra en el display todo
              setOper2(press);
            } else {
              //si ya se apreto un signo (/,*,-,+,)
              setDisplay(`${display}${press}`); //se muestra en el display todo
              setOper2(`${display}${press}`);
            }
          }
        }
      } else if (oper === 1 && press === ".") {
        //si ingreso un operador y ese operador es un "."
        if (press === ".") {
          if (display.includes(".")) return;

          setDisplay(display + ".");
          return;
        }
      } else if (oper === 1) {
        //si ingreso un operador "/,*,-,+""

        switch (press) {
          case "C":
            if (display.length <= 0) return;
            setDisplay("");
            setDisplayOper("");
            setOper1("");
            setOper2("");
            break;
          case "=":
            if (displayOper !== "" && oper1 !== "" && oper2 !== "") {
              calcular(oper1, displayOper, oper2);
              setDisplayOper("");
              setContinua(false);
              setOper1("");
              setOper2("");
              setIgual(true);
            } else {
              return;
            }
            break;
          case "x":
            //controlo q no haya una operacion pendiente de resolver antes.
            if (displayOper !== "" && oper1 !== "" && oper2 !== "") {
              calcular(oper1, displayOper, oper2);
              setDisplay(result);
              setDisplayOper("x");
              setOper1(result);
              setContinua(true);
            } else {
              if (display.length <= 0) return;
              setDisplayOper("x");
              setDisplay("");
            }

            break;
          case "+":
            if (displayOper !== "" && oper1 !== "" && oper2 !== "") {
              calcular(oper1, displayOper, oper2);
              setDisplay(result);
              setDisplayOper("+");
              setOper1(result);
              setContinua(true);
            } else {
              if (display.length <= 0) return;
              setDisplayOper("+");
              setDisplay("");
            }
            break;
          case "-":
            if (displayOper !== "" && oper1 !== "" && oper2 !== "") {
              calcular(oper1, displayOper, oper2);
              setDisplay(result);
              setDisplayOper("-");
              setOper1(result);
              setContinua(true);
            } else {
              if (display.length <= 0) return;
              setDisplayOper("-");
              setDisplay("");
            }
            break;
          case "/":
            if (displayOper !== "" && oper1 !== "" && oper2 !== "") {
              calcular(oper1, displayOper, oper2);
              setDisplay(result);
              setDisplayOper("/");
              setOper1(result);
              setContinua(true);
            } else {
              if (display.length <= 0) return;
              setDisplayOper("/");
              setDisplay("");
            }
            break;
          case "M+": //lo del display lo paso a la memoria
            localStorage.setItem("memory", display);
            setDisplayMem("M");
            break;
          case "M": //obtengo lo almacenado en la memoria
            const mem = localStorage.getItem("memory");
            if (mem > 0) {
              setDisplay(mem);
              if (oper === "") {
                setOper1(mem); //lo paso a un operador para poder usarlo
              } else {
                setOper2(mem);
              }
            }
            break;
          case "M-": //borro lo q tengo en la memoria
            localStorage.removeItem("memory");
            setDisplayMem("");
            break;
          default:
            setDisplay("Error!!");
        }
      }
    } else {
      setDisplay("Error!!");
    }
  };
  return (
    <Contenedor>
      {botonesSimbolos.map(boton => (
        //paso la funcion al hijo "botones"
        <Botones
          key={boton.id}
          handlePress={handlePress}
          texto={boton.simb}
          press={boton.press}
          isOper={boton.oper}
        />
      ))}
    </Contenedor>
  );
}

export default Keypad;
