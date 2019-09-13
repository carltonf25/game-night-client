import React, { useState } from "react";

import { Table } from "./styled-components/Event";

const GuestTable = ({ guests }) => (
  <Table
    style={{
      margin: `0 auto`
    }}
  >
    <tbody>
      <tr>
        <th>Guest</th>
        <th>Bringing</th>
      </tr>
      {guests.map(g => (
        <tr key={`guest-${g.id}`}>
          <td>{g.name}</td>
          <td>{g.bringing || `Just bringing myself`}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default GuestTable;
