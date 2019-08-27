import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: grid;
  grid-template-columns: 20vh auto 20vh;
  grid-template-rows: 20vh 1fr 20vh;

  .modal {
    background: #272236;
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 1em;
    color: #fefefe;
    transition: 0.3s ease;
    -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    a {
      margin-left: 95%;
      color: #16f5b3;
      transition: 0.2s ease;
      font-size: 1.5em;
      cursor: pointer;
      :hover {
        color: #17b180;
      }
    }
    label,
    input {
      display: block;
    }
    label {
      color: #16f5b3;
      font-size: 1.5em;
    }
    input {
      background: none;
      border: 1px solid #16f5b3;
      font-size: 1.3em;
      width: 30vw;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      padding: 15px;
      color: #fefefe;
      margin: 1em 0;
    }
    button {
      background: #16f5b3;
      padding: 16px;
      border: none;
      font-size: 1.3em;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      text-transform: uppercase;
      transition: 0.2s ease-in-out;
      margin: 1em 0;
      :hover {
        cursor: pointer;
        background: #17b180;
      }
    }
    @media screen and (max-width: 760px) {
      grid-column: 1/-1;
    }
  }
`;
