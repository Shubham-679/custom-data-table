import { Tr } from "@chakra-ui/react";
import TableRowCell from "./tableRowCell";
import { TableRowProps } from "./types";

function TableRow<T>({ rows, columns }: TableRowProps<T>): JSX.Element {
  return (
    <>
      {rows.map((item, itemIndex) => (
        <Tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </Tr>
      ))}
    </>
  );
};

export default TableRow;
