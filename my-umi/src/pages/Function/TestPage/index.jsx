import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout ,Form, DatePicker, Icon, Table, Divider, Modal,Button,Input} from 'antd';
import router from 'umi/router';
const { Content, Sider } = Layout;
// import { BasicListItemDataType } from './data.d';
import styles from './index.less';
const FormItem = Form.item;


@connect(({ TestData, loading }) => ({
  TestData,
  loading: loading.models.TestData,
}))

class TableList extends Component{ 
  state = {
    modalVisible: false,
    data:[],    
  };

  columns = [
    {
      title: '考试名称',
      dataIndex: 'testname',
      key: 'testname',      
    },
    {
      title: '考试人员',
      dataIndex: 'testperson',
      key: 'testperson',
    }, 
    {
      title: '标准',
      dataIndex: 'teststandard',
      key: 'teststandard',
    },   
    {
      title: '分绩',
      dataIndex: 'testscore',
      key: 'testscore',
    },
    {
      title: '结果',
      dataIndex: 'testresult',
      key: 'testresult',
    },
    {
      title: '考试时间',
      dataIndex: 'testtime',
      key: 'testtime',
    },
    {
      title: '操作',
      key: 'action',
      render: (record) => (<span>         
        <a onClick={() => this.testDetail('unfinish')}>继续考试</a>
    </span>)
      // {
      //   if(record.teststate == 'unfinish'){
      //     <span>         
      //         <a onClick={() => this.testDetail('unfinish')}>继续考试</a>
      //     </span>
      //   }else if(record.teststate == 'finish'){
      //     <span>         
      //         <a onClick={() => this.testDetail('finish')}>详情</a>
      //     </span>
      //   }
      // },
    },
  ];

  testDetail(key){
    router.push({pathname:'/test/testdetail',state:{teststate:key}});
  }
  
  TestStart(){
    router.push('/test/teststart');
  };

  render(){ 
    const {
      TestData: { listdata },
      loading,
      form
    } = this.props;
    this.data = listdata.data;    
    this.state.data = listdata.data;     
    
    return (
      <PageHeaderWrapper title=" " className={styles.main}>        
        <Layout style={{marginTop:-30}}>        
          <Sider width={200} style={{ background: '#fff' }}>
            <div
              style={{
                textAlign: 'center',           
              }}
            >
              <Input.Search
                placeholder="请输入"
                enterButton={<Icon type='search' />}            
                onSearch={this.handleUpdata}
                style={{
                  maxWidth: 522,
                  width: '100%',              
                }}
              />              
            </div>
            <div>
              {/* <FormItem label="开始时间">
                {form.getFieldDecorator('startdate')(
                  <DatePicker
                    style={{
                      width: '100%',
                    }}
                    placeholder="请选择日期"
                  />,
                )}
              </FormItem>
              <FormItem label="结束时间">
                {form.getFieldDecorator('overdate')(
                  <DatePicker
                    style={{
                      width: '100%',
                    }}
                    placeholder="请选择日期"
                  />,
                )}
              </FormItem> */}
            </div>
          </Sider>
          <Layout style={{borderLeft:'  1px solid #929292',marginLeft:1}}>        
            <Content
              style={{
                background: '#fff',
                padding: '0 24px',
                margin: 0,
                minHeight: 280,
              }}
            >      
            <Button type="primary" onClick={() => this.TestStart()}>
              考试
            </Button>          
            <Table 
              columns={this.columns}               
              loading={loading} 
              dataSource={this.state.data}             
            />
            </Content>
          </Layout>
        </Layout>
      </PageHeaderWrapper>    
    );
  }
  
  componentDidMount(){    
    const { dispatch } = this.props;
    dispatch({
      type: 'TestData/fetch',
    });  
  }
}

export default TableList;
