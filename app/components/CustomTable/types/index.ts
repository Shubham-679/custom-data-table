export interface IDataType {
  fullName: string;
  role: string;
  tags: string[];
}

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

export interface CustomTableProps<T> {
    rows: T[];
    columns: IColumnType<T>[];
    caption: String;
  }

export interface TableHeaderProps<T> {
    columns: IColumnType<T>[];
}

export interface TableRowProps<T> {
    rows: T[];
    columns: IColumnType<T>[];
  }

export interface TableRowCellProps<T> {
    item: T;
    column: IColumnType<T>;
  }
