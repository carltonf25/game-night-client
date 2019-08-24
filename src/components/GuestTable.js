import React, { useState } from "react";

import { Table } from "./styled-components/Event";

const GuestTable = ({ guests }) => (
  <Table>
    <tbody>
      <tr>
        <th>Guest</th>
        <th>Bringing</th>
      </tr>
      {guests.map(g => (
        <tr key={`guest-${g.id}`}>
          <td>{g.name}</td>
          <td>{g.bringing || `just bringing myself`}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default GuestTable;
