'use client';

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';

const Users = () => {
  const { data } = useSWR('/user', fetcher);

  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
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
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">Admins</h1>
      </div>

      <Table dataSource={data?.filter((user)=>user.role==="admin")} columns={columns} />
    </div>
  );
};

export default Users;
