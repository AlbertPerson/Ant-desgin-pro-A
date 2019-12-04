import { Form, Input, Modal,Button } from 'antd';
import React from 'react';
import { func } from 'prop-types';

const FormItem = Form.Item;

function timeAdd0(s) {
  return s < 10 ? '0' + s: s;
}

function test(){
  console.log("222")
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
  const okHandleifa = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      console.log(fieldsValue);     
      form.resetFields();
      handleAdd(fieldsValue,"ifa");
    });
  };   

  var today = new Date(),
  date = today.getFullYear() + '-' + timeAdd0((today.getMonth() + 1)) + '-' + timeAdd0(today.getDate()) + ' ' + timeAdd0(today.getHours()) + ':' + timeAdd0(today.getMinutes());

  
  
  return (    
    <Modal
      destroyOnClose
      title="添加大类"
      visible={modalVisible}
      footer={[
        <Button type="primary" key="bca" onClick={okHandleifa}>保存并继续</Button>,
        <Button type="primary" key="bc" onClick={okHandle}>保存</Button>,
        <Button onClick={() => handleModalVisible()}>取消</Button>,        
      ]}
      // onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="编号"
      >
        {form.getFieldDecorator('bh', {
          rules: [
            {
              required: false,
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
        label="类别"
      >
        {form.getFieldDecorator('typename', {
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
        label="子类"
      >
        {form.getFieldDecorator('subclass', {
          rules: [
            {
              required: false,
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
    </Modal>
  );
};

export default Form.create()(CreateForm);
