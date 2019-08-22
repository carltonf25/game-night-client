import styled from "styled-components";

export const CreateButton = styled.button`
  border: none;
  padding: 15px 10px;
  text-transform: uppercase;
  background: #16f5b3;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  border-radius: 5px;
  color: #261a2f;
  grid-column: 2/3;
  max-width: 100px;
  justify-self: center;
  transition: 0.2s ease;

  :hover {
    cursor: pointer;
    background: #17b180;
  }
`;
