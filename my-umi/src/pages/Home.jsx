import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './Home.less';


export default () => { 
  return (
    <PageHeaderWrapper title=" " className={styles.main}>      
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