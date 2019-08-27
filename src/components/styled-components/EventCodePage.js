import styled from "styled-components";

export const EventCodeWrapper = styled.div`
  grid-area: route;
  grid-column: 2/3;
  color: #16f5b3;
  margin: 2em;
  min-height: 77.5vh;
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
    :hover {
      cursor: pointer;
      background: #17b180;
    }
  }

  @media screen and (max-width: 760px) {
    .input-button-wrapper {
      display: grid;
      grid-template-rows: auto auto;
      button {
        margin-top: 1.5rem;
        grid-row: 2;
        width: 60%;
      }

      input {
        width: 60%;
      }
    }
  }
`;
