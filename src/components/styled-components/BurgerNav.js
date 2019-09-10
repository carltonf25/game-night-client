import styled from "styled-components";

export const NavWrapper = styled.div`
  z-index: 37;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #272236;
  a {
    font-size: 3rem;
    color: #16f5b3;
    transition: 0.2s ease;
    :hover {
      color: #18f7b5;
      transform: scale(1.03);
    }
    :first-child {
      text-decoration: none;
      position: absolute;
      top: 2em;
      right: 2em;
    }
  }
`;
