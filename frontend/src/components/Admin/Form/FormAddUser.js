import React, { useState } from 'react';
import { Form, Input, Button, Checkbox,notification } from 'antd';
import {instance} from "../../../ultils/ultils"
import { useNavigate, useLocation } from "react-router-dom";
const FormAddUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onFinish = async (e) => {
    
    const body = {
      email:e.email,
      password:e.password,
      username:e.username
    }

    await instance.post("/users/register",body)
    .then(res => {
      if(res.status === 200){
      
         
          const retUrl = location.state?.from?.pathname || "/dashboard/users";
          navigate(retUrl);
         
      }
      else{
        notification.open({
          message: 'Notification',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      }
    })
    
  };
  const [componentSize, setComponentSize] = useState('default');
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        size: componentSize,
      }}
      layout="horizontal"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          { min: 5, message: 'Username must be minimum 5 characters.' }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
     
     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormAddUser;