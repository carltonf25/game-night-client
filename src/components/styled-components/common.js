import styled from "styled-components";

export const BackButton = styled.button``;

export const Wrapper = styled.div`
  display: grid;
  grid-row: 2/3;
  grid-template-columns: 10% 1fr 10%;
  padding: 0;
  grid-column: 1/-1;
  width: 100%;
  margin-bottom: 54vh;

  input {
    background: none;
    border: 1px solid #272236;
    -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    padding: 12px 20px;
    color: #272236;
    margin: 1em 0;
    width: 70%;
  }
`;

export const Section = styled.div`
  background: #261a30;
  padding: 2em;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin: 1em 0;
  color: #fefefe;
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  width: 100%;
  max-width: 760px;


button {
  background: #16f5b3;
  padding: 12px 20px;
  font-size: 12px;
  border: none;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background: #17b180;
  }

  h1 {
    grid-column: 2/3;
    justify-self: center;
    border-bottom: 2px solid #16f5b3;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 760px) {
    grid-column: 1/-1;
  }
`;

export const Error = styled.div`
  background: #ff8e74;
  padding: 15px;
  font-weight: 600;
  font-size: 1.2em;
  margin: 1em 0;
  color: #fefefe;
  border-left: 5px solid red;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;

export const Success = styled.div`
  grid-column: 2/3;
  background: #15f5b3;
  padding: 15px;
  font-weight: 600;
  font-size: 1.2em;
  margin: 1em 0;
  color: #242424;
  border-left: 5px solid #10814d;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;
