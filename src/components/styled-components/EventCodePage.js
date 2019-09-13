import styled from "styled-components";

export const EventCodeWrapper = styled.div`
  grid-area: route;
  grid-template-columns: 10% 1fr 10%;
  margin: 2em;
  min-height: 80vh;
  label {
    color: #16f5b3;
    font-size: 1.5em;
  }

  .input-button-wrapper {
    h1 {
      width: 100%;
      grid-column: 2/3;
      grid-row: 1;
    }
    display: grid;
    grid-template-columns: 10% 1fr 10%;
    grid-template-rows: auto auto auto auto;

    label {
      grid-column: 2/3;
      grid-row: 2;
      text-align: left;
    }
    input {
      margin: 1em 0;
      max-width: 500px;
      background: none;
      border: 1px solid #16f5b3;
      font-size: 1.3em;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      padding: 15px;
      color: #fefefe;
      grid-column: 2/3;
      grid-row: 3;
    }

    button {
      background: #16f5b3;
      padding: 15px;
      border: none;
      font-size: 1.3em;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      text-transform: uppercase;
      transition: 0.2s ease-in-out;
      grid-column: 2/3;
      grid-row: 4;
      max-width: 250px;
      :hover {
        cursor: pointer;
        background: #17b180;
      }
    }
  }

  @media screen and (max-width: 760px) {
  }
`;
