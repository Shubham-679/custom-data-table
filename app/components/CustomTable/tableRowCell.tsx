import { Td } from "@chakra-ui/react";
import { TableRowCellProps } from "./types";

function get(
  object: object | any,
  path: object | any,
  defaultValue: string
): string {
  const parts = path.split(".");
  for (let part of parts) {
    if (!object) return defaultValue;
    object = object[part];
  }
  return object ?? defaultValue;
}

function TableRowCell<T>({ item, column }: TableRowCellProps<T>): JSX.Element {
  const value = get(item, column.key, "");
  return (
    <Td>
      <>{column.render ? column.render(column, item) : value}</>
    </Td>
  );
}

export default TableRowCell;
