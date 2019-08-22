import styled from "styled-components";

export const EventWrapper = styled.div`
  margin-top: 2em;
  color: #fefefe;
  grid-template-columns: 10vw auto auto 10vw;
  grid-column: 2/3;

  .event-heading {
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 3em;
    grid-column-gap: 3em;
    img {
      width: 100%;
      max-width: 760px;
      grid-column: 1/2;
      grid-row: 1;
    }
    .date-section {
      padding: 15px;
      grid-row: 1;
      grid-column: 2/3;
    }
    button {
      background: #16f5b3;
      border-radius: 5px;
      font-size: 1.2em;
      padding: 10px;
      grid-row: 2;
      grid-column: 2/3;
      width: 60%;
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
        grid-column: 1/-1;
      }
    }
    .description-date {
      div {
        grid-column: 1/-1;
      }
    }
  }
`;

export const GuestTable = styled.table`
  border: 1px solid rgba(220, 220, 220, 0.5);
  width: 50%;
  -webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  -moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);

  td,
  th {
    padding: 1em;
  }
`;
