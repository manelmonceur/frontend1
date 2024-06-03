'use client';

import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Button, Modal, Space, Table, message } from 'antd';
import ChildModal from '@/components/child/SelectChildModal/ChildModal';
import axios from '@/utils/axios';
import { Child } from '../../../../types/api';
import { fetcher } from '../../../../utils/fetcher';
import { useParentStore } from 'store/useParentStore';
import { useRouter } from 'next/navigation';

const Users = () => {
  const router = useRouter();
  const [modal, contextHolder] = Modal.useModal();

  const [isChildModalOpen, setIsChildModalOpen] = useState(false);
  const [editedChild, setEditedChild] = useState<Child>();

  // const { data: children } = useSWR<Child[]>('/child', fetcher);
  const children = [
    {
      firstName: 'Ahmed Ben Hmida',
      lastName: '',
      class: '1 er',
    },
    {
      firstName: 'Walid Labyedh',
      lastName: '',
      class: '6 eme',
    },
  ];

  const { setSelectChild } = useParentStore();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          <Button
            onClick={() => {
              setSelectChild(record);
              router.push('/children/calender');
            }}
          >
            Navigate
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => {
              modal.confirm({
                title: 'Are you sure you want to delete this child?',
                onOk: async () => {
                  await axios.delete(`/child/${record._id}`);
                  await mutate('/child');
                  message.success('Child deleted successfully');
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
        <h1 className="text-xl">My children</h1>

        <Button
          type="primary"
          onClick={() => {
            setEditedChild(undefined);
            setIsChildModalOpen(true);
          }}
        >
          Add child
        </Button>
      </div>

      <Table dataSource={children} columns={columns} />

      <ChildModal
        isOpen={isChildModalOpen}
        setIsOpen={setIsChildModalOpen}
        editedChild={editedChild}
      />

      {contextHolder}
    </div>
  );
};

export default Users;
