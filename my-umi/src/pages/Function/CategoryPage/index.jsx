import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Layout , Menu,  message, Icon, Table, Divider, Modal,Button,Input} from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
// import { BasicListItemDataType } from './data.d';
import CreateForm from './components/CreateForm';
import styles from './index.less';

@connect(({ listAndtableList, loading }) => ({
  listAndtableList,
  loading: loading.models.listAndtableList,
}))

class TableList extends Component{ 
  state = {
    modalVisible: false,
    data:[],   
  };

  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  //修改和删除
  editAndDelete = (key,record) => {
    if (key === 'edit') ;
    else if (key === 'editsub') ;
    else if (key === 'delete') {
      Modal.confirm({
        title: '删除任务',
        content: '确定删除该任务吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {          
          this.data = this.DeleteData(record)
          // var key = record.key
          // this.data = this.data.filter(Item => key.indexOf(Item.key) === -1)
          console.log(this.data);
          this.setState({
            data: this.data
          });
        },
      });
    }
    else if (key === 'deletesub') {
      Modal.confirm({
        title: '删除子类',
        content: '确定删除该子类吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          console.log(record);
          document.getElementById(record.key).remove();
          var data = this.data
          var recordIndex = (data|| []).findIndex((data) => data.key === record.key);
          this.data[recordIndex].subclass = "";
          this.setState({
            data: this.data
          });
          message.success('删除成功');
        },
      });
    }
  };

  DeleteData(record){
    var _arr = this.state.data;
    var _obj = record
    var length = _arr.length;
    for (var i = 0; i < length; i++) {
        if (_arr[i] == _obj) {
            if (i == 0) {
                _arr.shift(); //删除并返回数组的第一个元素                       
                return _arr;
            }
            else if (i == length - 1) {
                _arr.pop();  //删除并返回数组的最后一个元素   
                console.log(_arr)               
                return _arr;
            }
            else {
                _arr.splice(i, 1); //删除下标为i的元素  
                console.log(_arr)                
                return _arr;
            }
        }
    }  
  }

  handleAdd = (fields,ifa) => {
    const i = Math.ceil(Math.random() * 10000);
    fields.key = i;
    this.data.unshift(fields);
    this.setState({
      data: this.data,
    });     
    if(ifa=='ifa'){
      this.handleModalVisible(true);    
    }else{
      this.handleModalVisible(false);    
    }s    
    message.success('添加成功');
  };

  columns = [
    {
      title: '类别名称',
      dataIndex: 'typename',
      key: 'typename',
      render: text => <a style={{color:"red"}}>{text}</a>,
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      key: 'createtime',
    },        
    {
      title: '操作',
      key: 'action',
      render: (record) => (
        <span>
          <a>添加子类</a>
          <Divider type="vertical" />
          <a onClick={() => this.editAndDelete('edit',record)}>修改</a>
          <Divider type="vertical" />
          <a onClick={() => this.editAndDelete('delete',record)}>删除</a>       
        </span>
      ),
    },
  ];

  render(){    
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };   
    const {
      listAndtableList: { listdata },
      loading,
    } = this.props;
    this.data = listdata.data;    
    this.state.data = listdata.data;
    const { modalVisible } = this.state; 
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
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>                   
                    入场安全
                  </span>
                }
              >
                <Menu.Item key="1">通用安全培训课程</Menu.Item>
                <Menu.Item key="2">通用消防培训课程</Menu.Item>             
              </SubMenu>
              <Menu.Item key="sub2">日常安全</Menu.Item>
            </Menu>
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
            <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
              添加大类
            </Button>  
            <CreateForm {...parentMethods} modalVisible={modalVisible} />
            <Table 
              columns={this.columns}             
              loading={loading} 
              dataSource={this.state.data}
              expandedRowRender={record => <p id={record.key} style={{ margin: 0,color:"red" }}>{record.subclass}
                <span style={{float:"right",marginRight:"254px"}}>                
                  <a onClick={() => this.editAndDelete('editsub',record)}>修改</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.editAndDelete('deletesub',record)}>删除</a>       
                </span>
              </p>
             }
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
      type: 'listAndtableList/fetch',
    });  
  }
}

export default TableList;
