import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10vh 1fr 10vh;
  width: 100vw;
`;

export const Section = styled.div`
  background: #261a30;
  padding: 15px;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  margin: 2em;
  color: #fefefe;

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
  margin: 1em 0;
  color: #fefefe;
  border-left: 5px solid red;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;

export const Success = styled.div`
  grid-column: 2/3;
  background: #07ca79;
  padding: 15px;
  font-weight: 600;
  margin: 1em 0;
  color: #fefefe;
  border-left: 5px solid #10814d;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;
