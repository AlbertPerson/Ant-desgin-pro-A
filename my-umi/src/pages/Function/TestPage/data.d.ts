export interface TableListItem {
  key: number;
  testname:string;
  testperson: string;
  teststandard:string;
  testscore:string;
  testresult:string;
  teststate:string;
  testtime:string;
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
