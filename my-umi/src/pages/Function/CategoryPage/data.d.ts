export interface TableListItem {
  key: number;
  typename:string;
  createtime:string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {  
  pageSize: number;
  currentPage: number;
}
