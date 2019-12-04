import { Form, Input, Select ,Table, Modal ,Icon} from 'antd';
import React from 'react';

const FormItem = Form.Item;

function timeAdd0(s) {
  return s < 10 ? '0' + s: s;
}

const CreateForm = props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      console.log(fieldsValue);     
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };  

  var today = new Date(),
  date = today.getFullYear() + '-' + timeAdd0((today.getMonth() + 1)) + '-' + timeAdd0(today.getDate()) + ' ' + timeAdd0(today.getHours()) + ':' + timeAdd0(today.getMinutes());

  const columns = [
    {
      title: '选项描述',
      dataIndex: 'xxms',
    },
    {
      title: '是否正确',
      dataIndex: 'sfzq',
      render: (record) => (
        <Select defaultValue="请选择" style={{ width: 100 }}>
            <Select.Option value="是">是</Select.Option>
            <Select.Option value="否">否</Select.Option> 
        </Select>
      ),
    },
    {
      title: '操作',
      dataIndex: 'cz',
      render: (record) => (
        <span>         
          <a><Icon style={{color:"red"}} type="minus-circle" /></a>       
        </span>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      xxms: '正确',
      sfzq: '请选择',      
    },
    {
      key: '2',
      xxms: '正确',
      sfzq: '请选择',     
    },
    {
      key: '3',
      xxms: '错误',
      sfzq: '请选择',       
    },
  ];

  return (    

    <Modal
      destroyOnClose
      title="添加题目"
      visible={modalVisible}
      okText="保存"
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="类别"
      >
        {form.getFieldDecorator('subjecttype', {
          initialValue:'通用安全培训课程',
          rules: [
            {
              required: true,
              message: '',              
            },
          ],          
        })(
          <Select style={{ width: 295 }}>
            <Select.Option value="通用安全培训课程">通用安全培训课程</Select.Option>
            <Select.Option value="通用消防培训课程">通用消防培训课程</Select.Option> 
          </Select>
        )}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="类型"
      >
        {form.getFieldDecorator('category', {
          initialValue:'单选',
          rules: [
            {
              required: true,
              message: '',
            },
          ],
        })(
          <Select style={{ width: 295 }}>
            <Select.Option value="单选">单选</Select.Option>
            <Select.Option value="多选">多选</Select.Option>
            <Select.Option value="判断">判断</Select.Option>  
          </Select>
        )}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="题目"
      >
        {form.getFieldDecorator('subjectname', {
          rules: [
            {
              required: true,
              message: '',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="排序"
      >
        {form.getFieldDecorator('px', {
          rules: [
            {
              required: false,
              message: '',
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>
      <FormItem style={{display:"none"}}>
      {form.getFieldDecorator('createtime', {
        initialValue:date
      })(<Input  />)}
      </FormItem>
      <FormItem>
      {form.getFieldDecorator('bg', {
        rules: [
          {
            required: false,
            message: '',
          },
        ],
      })(
        <Table columns={columns} pagination={false} dataSource={data} size="small" />
      )}
      </FormItem>
    </Modal>
  );
};

export default Form.create()(CreateForm);
