import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './Home.less';


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
          paddingTop: 100,
          textAlign: 'center',
        }}
      >
        <Spin spinning={loading} size="large"></Spin>
      </div>    
      <div style={{
        paddingBottom:80,
        fontSize:48,
        textAlign:'center',        
      }}>
        欢迎进入考试系统
      </div>      
    </PageHeaderWrapper>
  );
};