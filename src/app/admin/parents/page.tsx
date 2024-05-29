'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';
import { activateParent, deleteParent, getParent } from '@/services/apiService';

const Users = () => {
  const [parents, setParents] = useState([]);

  const fetchParents = async () => {
    const response = await getParent();
    setParents(response);
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
      title: 'Meet Range',
      key: 'meetRange',
      render: (text: any, record: any) => (
        <span>
          {record.dateRange[0]} - {record.dateRange[1]}
        </span>
      ),
    },
    {
      title: 'Status',
      key: 'activate',
      render: (text: any, record: any) => (
        <Space>
          <Button>{record.activate ? 'Active' : 'Pending'}</Button>
        </Space>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          {!record.activate ? (
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
    <div className="p-4">
      <div>
        <h1 className="text-xl">Parents</h1>
      </div>

      <Table dataSource={parents} columns={columns} />
    </div>
  );
};

export default Users;
