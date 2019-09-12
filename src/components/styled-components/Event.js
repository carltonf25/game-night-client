import styled from "styled-components";

export const EventWrapper = styled.div`
  display: grid;
  width: 100vw;
  margin-top: 2em;
  color: #fefefe;
  grid-template-columns: 10% 1fr 10%;

  img {
    width: 100%;
    margin: 0;
    max-height: 180px;
  }
  .date-rsvp-section {
    padding: 20px;
  }
  button {
    background: #16f5b3;
    border-radius: 5px;
    font-size: 1.2em;
    padding: 10px 50px;
    grid-row: 2;
    grid-column: 2/3;
    margin-bottom: 2em;
    justify-self: center;
    border: none;
    -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
    transition: 0.2s ease;
    :hover {
      cursor: pointer;
      transform: scale(1.02);
      background: #17b180;
    }
  }
  @media screen and (max-width: 760px) {
    grid-column: 1/-1;

    .event-heading {
      grid-template-rows: auto;
      .date-section {
        display: none;
      }
      img,
      button {
        grid-column: -1/-1;
      }
    }
    .description-date {
      div {
        grid-column: 1/-1;
      }
    }
  }
`;

export const Table = styled.table`
  width: 75%;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  border-collapse: collapse;

  td,
  th {
    padding: 1em;
    background: #272236;
    border: 1px solid grey;
  }
  th {
    background: #4a4267;
  }
`;
