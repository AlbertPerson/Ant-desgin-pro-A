import { parse } from 'url';
// mock TestDataource
let TestDataSource = [
  {
    key: 0,
    testname:`20191115安全考试1`,
    testperson: `张三`,
    teststandard:`100分/60分`,
    testscore:`-`,
    testresult:`-`,
    teststate:`unfinish`,
    testtime:'2019-11-15 09:30',
  },
  {
    key: 1,
    testname:`20191115安全考试2`,
    testperson: `李四`,
    teststandard:`100分/60分`,
    testscore:`80分`,
    testresult:`合格`,
    teststate:`finish`,
    testtime:'2019-11-15 09:30',
  },
];


function getRule(req, res, u) {
  let url = u;

  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    // eslint-disable-next-line prefer-destructuring
    url = req.url;
  }

  const params = parse(url, true).query;
  let dataSource = TestDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }

      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(item => {
          if (parseInt(`${item.status}`, 10) === parseInt(s.split('')[0], 10)) {
            return true;
          }

          return false;
        }),
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1);
  }

  let pageSize = 10;

  if (params.pageSize) {
    pageSize = parseInt(`${params.pageSize}`, 0);
  }

  const result = {
    data: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(`${params.currentPage}`, 10) || 1,
    },
  };
  return res.json(result);
}

export default {
  'GET /api/testdata': getRule ,  
};
