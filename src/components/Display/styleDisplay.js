import styled from "styled-components";

export const Contenedor = styled.div`
  background-color: #dbedff;

  border-top-color: #666f88;
  border-right-color: #666f88;
  border-bottom-color: #666f88;
  border-left-color: #666f88;
  border-top-width: 10px;
  border-right-width: 10px;
  border-bottom-width: 10px;
  border-left-width: 10px;

  border-top-style: inset;
  border-right-style: inset;
  border-bottom-style: inset;
  border-left-style: inset;
  font-size: 38px;
  text-align: right;
  margin: 30px;
  width: 245px;
  height: 70px;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: -moz-none;
  font-family: monospace;
  color: #001183;
`;

export const Cont = styled.div`
  width: 10px;
  display: flex;
  flex-direction: column; // ordena en column, sino por defecto se ordena en fila
  height: 10px;
  color: #d6260e;
  font-size: 20px;
  position: absolute;
  margin-top: 40px;
  font-weight: bold;
`;
export const Cont1 = styled.div`
  width: 10px;
  display: flex;
  flex-direction: column; // ordena en column, sino por defecto se ordena en fila
  height: 10px;
  color: #d6260e;
  margin-left: 5px;
  font-size: 25px;
  position: absolute;
  margin-top: 65px;
  font-weight: bold;
`;
