export interface IDataType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  domain: string;
}

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
  sortable?: boolean;
}

export interface CustomTableProps<T> {
    rows: T[];
    columns: IColumnType<T>[];
    caption: String;
    pagination?: boolean;
  }

export interface TableHeaderProps<T> {
    columns: IColumnType<T>[];
    handleTableSort: (accessor: IColumnType<T>, sortOrder: string) => void;
}

export interface TableRowProps<T> {
  rows: T[];
  columns: IColumnType<T>[];
  }

export interface TableRowCellProps<T> {
    item: T;
    column: IColumnType<T>;
  }
