import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';

import styles from './index.less';

export default () => { 
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！" className={styles.main}>
     
    </PageHeaderWrapper>
  );
};
