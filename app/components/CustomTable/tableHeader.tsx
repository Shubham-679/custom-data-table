import { Tr } from "@chakra-ui/react";
import TableHeaderCell from "./tableHeaderCell";
import { TableHeaderProps } from "./types";

function TableHeader<T>({ columns }: TableHeaderProps<T>): JSX.Element {
  return (
    <Tr>
      {columns.map((column, columnIndex) => {
      const Nstyle: React.CSSProperties = { width: column.width };
        return (
          <TableHeaderCell
            key={`table-header-cell-${columnIndex}`}
            customStyle={{ width: column.width }}
          >
            {column.title}
          </TableHeaderCell>
        );
      })}
    </Tr>
  );
}

export default TableHeader;
