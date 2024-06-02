'use client';

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';

const Users = () => {
  const { data } = useSWR('/user', fetcher);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">Admins</h1>
      </div>

      <Table
        dataSource={data?.filter((user) => user.role === 'admin')}
        columns={columns}
      />
    </div>
  );
};

export default Users;
