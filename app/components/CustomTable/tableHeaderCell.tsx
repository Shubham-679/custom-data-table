import { Th } from "@chakra-ui/react";

const TableHeaderCell = ({ children, customStyle, onTableSort, sortable }: { children: React.ReactNode, customStyle: React.CSSProperties, onTableSort: (accessor: object) => void, sortable?: boolean }) => (
  <Th style={customStyle} onClick={sortable ? () => onTableSort() : null}>{children}</Th>
);

export default TableHeaderCell;
