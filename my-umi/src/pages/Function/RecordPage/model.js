import { queryRecord } from './service';

const Model = {
  namespace: 'RecordData',
  state: {
    listdata: {
      data: [],
      pagination: {},
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRecord, payload);
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
