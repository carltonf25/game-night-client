import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  grid-area: route;
  color: #16f5b3;
  margin: 2em;
  min-height: 80vh;
  max-width: 760px;

  h1 {
    grid-column: 2/3;
  }

  form {
    grid-column: 2/3;
    label {
      color: #16f5b3;
      font-size: 1.5em;
    }

    input {
      background: none;
      border: 1px solid #16f5b3;
      font-size: 1.3em;
      -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
      padding: 15px;
      color: #fefefe;
      margin: 1em 0;
      width: 70%;
    }
  }
  table {
    grid-column: 1/-1;
  }

  .description-date {
    display: grid;
    grid-template-columns: 65% 35%;
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
    grid-column: 1/-1;
  }
`;
