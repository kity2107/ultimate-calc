import styled from "styled-components";

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-top-width: 10px;
  border-right-width: 1em;
  border-bottom-width: thick;
  border-left-width: thin;
  color: #d0e20f;
  background-color: ${props => (props.oper === 1 ? "#393939" : "#8c8c8c")};
  font-weight: bold;
  font-size: 18px;
`;

export const Contenedor = styled.div`
  width: 250px;
`;
