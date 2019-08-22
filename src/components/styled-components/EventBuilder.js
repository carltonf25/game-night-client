import styled from "styled-components";

export const ChecklistItem = styled.div`
  color: #261a2f;
  background: #c2f7e7;
  padding: 15px;
  grid-column: 2/3;
  margin: 10px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;

export const EditButton = styled.button`
  border: none;
  background: none;
  transition: 0.2s ease;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;
