import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  Thead,
  Tbody,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import { CustomTableProps, IColumnType, IDataType } from "./types";
import { Pagination } from "../Pagination";
let PageSize = 10;

export function CustomTable<T>({
  caption,
  columns,
  rows,
}: CustomTableProps<T>): JSX.Element {

  const [tableData, setTableData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTableData(rows);
  }, [rows]);

  function handleTableSort(sortField: IColumnType<T>, sortOrder: string): void {
    if (sortField) {
      const field = sortField.key;
      const sorted : any = [...tableData].sort((a : any, b: any) => {
        if (a[field] === null) return 1;
        if (b[field] === null) return -1;
        if (a[field] === null && b[field] === null) return 0;
        return (
          a[field].toString().localeCompare(b[field].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  }

   useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const tempArray = JSON.parse(JSON.stringify(rows)); 
    setTableData(tempArray.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, rows]);

  return (
    <TableContainer m={6} overflowX="auto">
      <Table variant='striped' colorScheme="gray" size='lg' p='6'>
        <TableCaption>
          <Box fontSize='lg' w='100%' p={4}>
            {caption}
          </Box>
          </TableCaption>
        <Thead>
          <TableHeader columns={columns} handleTableSort={handleTableSort} />
        </Thead>
        <Tbody>
          <TableRow rows={tableData} columns={columns} />
        </Tbody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalCount={rows.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </TableContainer>
  );
}
