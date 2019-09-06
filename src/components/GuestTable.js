import React, { useState } from "react";

import { Table } from "./styled-components/Event";

const GuestTable = ({ guests }) => (
  <Table>
    <tbody>
      <tr>
        <th>Guest</th>
      </tr>
      {guests.map(g => (
        <tr key={`guest-${g.id}`}>
          <td>{g.name}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default GuestTable;
