import React from "react";
import {
  Table,
  Thead,
  Tbody,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import { CustomTableProps } from "./types";

export function CustomTable<T> ({ caption, columns, rows }: CustomTableProps<T>): JSX.Element {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{caption}</TableCaption>
        <Thead>
          <TableHeader columns={columns} />
        </Thead>
        <Tbody>
          <TableRow rows={rows} columns={columns} />
        </Tbody>
      </Table>
    </TableContainer>
  );
};
