import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

export default () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper title=" " className={styles.main}>
      <div
        style={{
          paddingTop: 24,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large"></Spin>
      </div>
    </PageHeaderWrapper>    
  );
};
