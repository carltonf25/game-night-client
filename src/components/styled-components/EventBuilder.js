import styled from "styled-components";

export const ChecklistItem = styled.div`
  color: #261a2f;
  padding: 15px;
  grid-column: 1/-1;
  margin: 10px 0;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);

  input {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 85%;
    height: 200px;
    padding: 12px 20px;
    border-radius: 4px;
    background: rgba(250, 250, 250, 0.7);
    resize: none;
  }
`;

export const EditButton = styled.button`
  display: block;
  border: none;
  font-size: 10px;
  background: none;
  transition: 0.2s ease;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;
