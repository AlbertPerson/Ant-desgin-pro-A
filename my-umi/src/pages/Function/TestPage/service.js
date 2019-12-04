import request from '@/utils/request';

export async function queryTestData() {
  return request('/api/testdata ');
}
