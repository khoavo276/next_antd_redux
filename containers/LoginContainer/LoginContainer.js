import PATHS from '@config/paths';
import { login } from '@store/user';
import api from '@utils/api';
import { Button, Form, Input, message } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const LoginContainer = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onFinish = async values => {
    try {
      setSubmitting(true);
      const response = await api.post(`/users/sign_in`, values);
      const { authorization } = response;
      const token = authorization.replace('Bearer ', '');
      const { redirectTo = PATHS.home } = router.query;
      router.push(redirectTo);
      dispatch(login(token));
    } catch (error) {
      message.error(error?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!'
          }
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
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          disabled={submitting}
          loading={submitting}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginContainer;
