'use client';

import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Button, Modal, Space, Table, message } from 'antd';
import PaymentModal from '@/components/parent/payment/PaymentModal';
import axios from '@/utils/axios';
// import { Payment } from '../../../../types/api';
import { fetcher } from '../../../../utils/fetcher';

const Users = () => {
  const [modal, contextHolder] = Modal.useModal();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [editedPayment, setEditedPayment] = useState<any>();

  // const { data: payments } = useSWR<Payment[]>('/payment', fetcher);

  const payments = [
    {
      _id: '1',
      teacher: 'teacher1',
      child: 'child1',
      amount: '50dt',
    },
    {
      _id: '2',
      teacher: 'teacher2',
      child: 'child2',
      amount: '100dt',
    },
  ];

  const columns = [
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 'firstName',
    },
    {
      title: 'Child',
      dataIndex: 'child',
      key: 'child',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          <Button
            onClick={() => {
              setEditedPayment(record);
              setIsPaymentModalOpen(true);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              modal.confirm({
                title: 'Are you sure you want to delete this payment?',
                onOk: async () => {
                  await axios.delete(`/payment/${record._id}`);
                  await mutate('/payment');
                  message.success('Payment deleted successfully');
                },
              });
            }}
          >
            Delete
          </Button>
        </Space>
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
      />

      {contextHolder}
    </div>
  );
};

export default Users;
