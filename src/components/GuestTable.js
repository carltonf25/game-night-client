import React, { useState, useEffect } from 'react';
import { Table } from './styled-components/Event';
require('dotenv').config();

const GuestTable = ({ guests }) => {
  return (
    <Table
      style={{
        margin: `0 auto`
      }}
    >
      <tbody>
        <tr>
          <th>Guest</th>
        </tr>
        {guests &&
          guests.map(g => (
            <tr key={`guest-${g.id}`}>
              <td>{g.name}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default GuestTable;
