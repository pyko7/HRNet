const TableRow = ({ row }) => (
  <tr>
    <td>{row.firstName}</td>
    <td>{row.lastName}</td>
    <td>{row.startDate}</td>
    <td>{row.department}</td>
    <td>{row.dateOfBirth}</td>
    <td>{row.street}</td>
    <td>{row.city}</td>
    <td>{row.state}</td>
    <td>{row.zipCode}</td>
  </tr>
);

export default TableRow;
