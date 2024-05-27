'use client';

import React, { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { Button, Modal, Space, Table, message } from 'antd';
import RatingModal from '@/components/common/RatingModal';

const Users = () => {
  const [isOpenRate, setIsOpeenRate] = useState(false);

  // const { data: children } = useSWR<Child[]>('/child', fetcher);

  const columns = [
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Children',
      dataIndex: 'child',
      key: 'child',
    },
    {
      title: 'Action',
      render: (text: any, record: any) => (
        <Space>
          <Button type="default">Message</Button>
          <Button type="primary" onClick={() => setIsOpeenRate(true)}>
            Rating
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="pb-2 flex justify-between">
        <h1 className="text-xl">Teachers</h1>
      </div>

      <Table
        dataSource={[
          { firstName: 'teacher', lastName: 'teacher', child: 'child' },
          { firstName: 'teacher', lastName: 'teacher', child: 'child' },
        ]}
        columns={columns}
      />

      <RatingModal isOpen={isOpenRate} close={() => setIsOpeenRate(false)} />
    </div>
  );
};

export default Users;
