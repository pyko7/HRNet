import { tableHeader } from "../../utils/utils";
import TableSortButtons from "./TableSortButtons";

const TableHeader = () => (
  <thead>
    <tr>
      {tableHeader.map((header) => (
        <th key={header.key}>
          {header.label}
          <TableSortButtons columnKey={header.key} />
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
