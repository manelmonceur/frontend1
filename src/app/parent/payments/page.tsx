'use client';

import React, { useEffect, useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Button, Modal, Space, Table, message } from 'antd';
import PaymentModal from '@/components/parent/payment/PaymentModal';
import axios from '@/utils/axios';
// import { Payment } from '../../../../types/api';
import { fetcher } from '../../../../utils/fetcher';
import { createPayment, getPayment } from '@/services/apiService';

const Users = () => {
  const [modal, contextHolder] = Modal.useModal();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [editedPayment, setEditedPayment] = useState<any>();

  // const { data: payments } = useSWR<Payment[]>('/payment', fetcher);

  const [payments, setPayments] = useState([]);

  const _getPayments = async () => {
    const p = await getPayment();
    setPayments(p);
  };

  const _createPayment = async (values: any) => {
    const data = window.localStorage.getItem('user');
    if (!data) return;
    const user = JSON.parse(data);

    const content = {
      ...values,
      parent: user?.user?.name ?? 'Parent 1',
      parent_email: user?.user?.email ?? 'parent@gmail.com',
    };

    await createPayment(content);
    setIsPaymentModalOpen(false);

    await _getPayments();
  };

  useEffect(() => {
    _getPayments();
  }, []);

  const columns = [
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 'firstName',
    },
    {
      title: 'Teacher Email',
      dataIndex: 'teacher_email',
      key: 'teacher_email',
    },
    {
      title: 'Child',
      dataIndex: 'child',
      key: 'child',
    },
    {
      title: 'Formation',
      dataIndex: 'formation',
      key: 'formation',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Date',
      key: 'date',
      render: (text: any, record: any) => (
        <span>{record.createdAt.split('T')[0]}</span>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="pb-2 flex justify-between">
        <h1 className="text-xl">My payments</h1>

        <Button
          type="primary"
          onClick={() => {
            setEditedPayment(undefined);
            setIsPaymentModalOpen(true);
          }}
        >
          Add payment
        </Button>
      </div>

      <Table dataSource={payments} columns={columns} />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        setIsOpen={setIsPaymentModalOpen}
        editedPayment={editedPayment}
        _submit={_createPayment}
      />

      {contextHolder}
    </div>
  );
};

export default Users;
