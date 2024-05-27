import React, { FC, useEffect, useState } from 'react';
import { Modal, Form, Button, Alert } from 'antd';
import { PiSignInThin } from 'react-icons/pi';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import axios from '@/utils/axios';
import { useForm } from 'antd/es/form/Form';
import { signIn } from 'next-auth/react';

interface ModalLoginProps {
  isOpen: boolean;
  close: () => void;
}

const ModalLogin: FC<ModalLoginProps> = ({ isOpen, close }) => {
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const [form] = useForm();

  useEffect(() => {
    form.resetFields();
    setError(undefined);
  }, [show]);

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      if (show) {
        if (values.password !== values.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        await axios.post('/user', { ...values, role: 'parent' });
        setShow(false);
      } else {
        signIn('credentials', {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        close();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <Modal
      open={isOpen}
      onCancel={close}
      footer={null} // Setting footer to null removes OK and Cancel buttons
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        className="min-h-[600px] flex flex-col justify-center items-center "
        layout="vertical"
        onFinish={onSubmit}
      >
        <img
          className="h-32 w-auto mb-4"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        {show ? <SignUp /> : <SignIn />}

        {!!error && <Alert type="error" message={error} className="mb-2" />}

        <Form.Item>
          <div className="flex flex-col items-center gap-4">
            <Button
              className="flex items-center gap-4"
              htmlType="submit"
              loading={loading}
            >
              <PiSignInThin size={24} /> {show ? 'Sign Up' : 'Sign In'}
            </Button>
            <Button
              type="text"
              className="underline text-blue-400"
              onClick={() => setShow(!show)}
            >
              {!show ? 'Sign Up' : 'I have an account'}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalLogin;
