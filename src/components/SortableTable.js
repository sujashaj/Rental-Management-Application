// SortableTable.js
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
const SortableTable = ({ data, columns }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [activeColumn, setActiveColumn] = useState(null);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {columns.map((column) => (
            <th
              key={column.key}
              onClick={() => column.sortable && handleSort(column.key)}
              className={`${activeColumn === column.key ? 'table-active' : ''} ${column.sortable ? 'sortable' : ''}`}
              onMouseEnter={() => setActiveColumn(column.key)}
              onMouseLeave={() => setActiveColumn(null)}
              data-toggle="tooltip"
              data-placement="top"
              data-title={`Sort by ${column.label}`}
              data-delay='{"show": 0, "hide": 0}'
            >
              {column.label}
              {column.sortable && (
                <span>
                <i className={`ml-1 ${(sortConfig.key === column.key) && sortConfig.direction === 'asc' ?
                    'text-primary' : 'text-secondary'}`}>
                    <span>↑</span>
                </i>
                <i className={`ml-1 ${(sortConfig.key === column.key) && sortConfig.direction === 'desc' ?
                    'text-primary' : 'text-secondary'}`}>
                    <span>↓</span>
                </i>
                </span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export { SortableTable };