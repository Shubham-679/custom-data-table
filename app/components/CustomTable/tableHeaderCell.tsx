import { Th } from "@chakra-ui/react";

const TableHeaderCell = ({ children, customStyle }: { children: React.ReactNode, customStyle: React.CSSProperties }) => (
  <Th style={customStyle}>{children}</Th>
);

export default TableHeaderCell;
