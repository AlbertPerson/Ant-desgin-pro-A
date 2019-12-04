import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { Layout , Divider, Form, Input, Button, Table, Modal ,Icon} from 'antd';
import router from 'umi/router';
const { Content } = Layout;
import styles from './index.less';
import { red } from 'color-name';

const FormItem = Form.Item;

function timeAdd0(s) {
  return s < 10 ? '0' + s: s;
}
class TestFrom extends Component{ 
  state = {
  
  };

  
  // okHandle = () => {
  //   form.validateFields((err, fieldsValue) => {
  //     if (err) return;
  //     console.log(fieldsValue);     
  //     form.resetFields();
  //     router.push('/test/testdetail');
  //   });
  // }; 
  startHandle(){
    router.push('/test/testdetail');
  }

  date = new Date().getFullYear() + '-' + timeAdd0((new Date().getMonth() + 1)) + '-' + timeAdd0(new Date().getDate()) + ' ' + timeAdd0(new Date().getHours()) + ':' + timeAdd0(new Date().getMinutes());

  columns = [
    {
      title: '题型',
      dataIndex: 'tx',
    },
    {
      title: '题数/题',
      dataIndex: 'ts',     
    },
    {
      title: '分数/题',
      dataIndex: 'fs',     
    },
  ];
  data = [
    {
      key: '1',
      tx: '单选',
      ts: '20题',     
      fs: '2分', 
    },
    {
      key: '2',
      tx: '判断',
      ts: '10题',     
      fs: '2分',   
    },
    {
      key: '3',
      tx: '多选',
      ts: '10题',     
      fs: '4分',      
    },
    {
      key: '4',
      tx: '合计',
      ts: '40题',     
      fs: '100分',      
    },
  ];

  render(){    
    return (
      <PageHeaderWrapper title=" " className={styles.main}>        
        <Layout style={{marginTop:-30}}>
          <Content
              style={{
                background: '#fff',
                padding: '0 24px',
                margin: 0,
                minHeight: 280,
              }}
            > 
            <p style={{fontSize:"48px",textAlign:"center",marginBottom:10}}>20191115安全考试<br/>考试试卷</p>
            <p style={{fontSize:"16px",textAlign:"center",lineHeight:"48px",borderBottom:"5px solid rgb(255, 180, 180)"}}>
              总分：100分<Divider type="vertical" />合格：60分或以上<Divider type="vertical" />时长：90分钟
            </p>
            <div style={{width:'420px',margin:'0 auto'}}>
            <Form layout={'horizontal'}>
            <span style={{fontSize:'24px',marginBottom:'16px',display:'inline-block'}}><Icon style={{marginRight:'20px',color:'red'}} type="user" />考生姓名</span>
            <Form.Item label="身份证号" {...{
              labelCol: { span: 4 },
              wrapperCol: { span: 14 },
            }}>
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item label="姓名" {...{
              labelCol: { span: 4 },
              wrapperCol: { span: 14 },
            }}>
              <Input placeholder="请输入" />
            </Form.Item>
            <span style={{fontSize:'24px',marginBottom:'16px',display:'inline-block'}}><Icon style={{marginRight:'20px',color:'red'}} type="unordered-list" />考试信息</span>
            <Table columns={this.columns} pagination={false} dataSource={this.data} size="small" />
            <p style={{textAlign:'center',marginTop:'40px'}}>
              当前时间：{this.date}
            </p>
            <p style={{textAlign:'center'}}>
              <Button style={{backgroundColor:'red',borderColor:'red',width:'280px'}} onClick={this.startHandle} type="primary">开始考试</Button>
            </p>            
          </Form>
            </div>
          </Content>
        </Layout>
      </PageHeaderWrapper>    
    );
  }
  
  componentDidMount(){    
    
  }
}

export default TestFrom;
