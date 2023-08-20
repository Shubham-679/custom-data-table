import {  useState } from "react";
import { Flex, Tr } from "@chakra-ui/react";
import TableHeaderCell from "./tableHeaderCell";
import { TableHeaderProps, IColumnType } from "./types";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

function TableHeader<T>({ columns, handleTableSort }: TableHeaderProps<T>): JSX.Element {

  const [sortField, setSortField] = useState({});
  const [order, setOrder] = useState<string>("");

  const handleSortingChange = (accessor: object) => {
    const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleTableSort(accessor, sortOrder);
   }

   const getSortingArrow = (column : IColumnType<T>) : any => {
    const { sortable, key } = column;
    if(sortable && sortField?.key === key) {   
      let arrow = order === "asc" ? <HiArrowSmDown/> : <HiArrowSmUp/>
      return arrow;
    } else {
      return null;
    }
   }

  return (
    <Tr>
      {columns.map((column, columnIndex) => {
        return (
          <TableHeaderCell
            key={`table-header-cell-${columnIndex}`}
            customStyle={{ width: column.width }}
            onTableSort={() => handleSortingChange(column)}
            sortable={column.sortable}     
          >
            <Flex alignItems='center' gap='2'>
              {column.title} {getSortingArrow(column)}
            </Flex> 
          </TableHeaderCell>
        );
      })}
    </Tr>
  );
}

export default TableHeader;
