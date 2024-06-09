'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';
import {
  activateParent,
  deleteParent,
  getParent,
  getUsers,
} from '@/services/apiService';

const Users = () => {
  const [parents, setParents] = useState([]);

  const fetchParents = async () => {
    const response = await getUsers();
    console.log(response);
    setParents(response.filter((u) => u.role == 4));
  };

  const handleActivate = async (id: any) => {
    await activateParent(id);
    await fetchParents();
  };

  const handleDelete = async (id: any) => {
    await deleteParent(id);
    await fetchParents();
  };

  useEffect(() => {
    fetchParents();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      key: 'gender',
      render: (text: any, record: any) => {
        return 'Male';
      },
    },
    {
      title: 'Meet Range',
      key: 'meetRange',
      render: (text: any, record: any) => (
        <span>{record?.firstMeetingDate}</span>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          {!record.accountStatus ? (
            <Button onClick={() => handleActivate(record._id)}>
              {'Activate'}
            </Button>
          ) : (
            ''
          )}
          <Button
            type="primary"
            danger
            onClick={() => {
              handleDelete(record._id);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 space-y-5">
      <div>
        <h1 className="text-xl">Pending Accounts</h1>
      </div>

      <Table
        dataSource={parents.filter((p) => p.accountStatus != true)}
        columns={columns}
      />
    </div>
  );
};

export default Users;
