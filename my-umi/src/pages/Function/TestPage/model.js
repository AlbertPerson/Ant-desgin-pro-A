import { queryTestData } from './service';

const Model = {
  namespace: 'TestData',
  state: {
    listdata: {
      data: [],
      pagination: {},
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryTestData, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, listdata: action.payload };
    },
  },
};
export default Model;
