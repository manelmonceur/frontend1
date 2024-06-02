'use client';

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';

const Mentors = () => {
  const data = [
    {
      firstName: 'Ahmed',
      lastName: 'Ben Ahmed',
      phone: '55 148 963',
      email: 'ahmed@gmail.com',
      gender: 'M',
    },
    {
      firstName: 'Aymen',
      lastName: 'Sasi',
      phone: '53 348 963',
      email: 'Aymen@gmail.com',
      gender: 'M',
    },
    {
      firstName: 'Fatma',
      lastName: 'Ben Ahmed',
      phone: '55 148 473',
      email: 'Fatma@gmail.com',
      gender: 'F',
    },
    {
      firstName: 'Walid',
      lastName: 'Tonsi',
      phone: '99 486 324',
      email: 'walid@gmail.com',
      gender: 'M',
    },
    {
      firstName: 'Tawfik',
      lastName: 'labiedh',
      phone: '22 475 968',
      email: 'tawfik@gmail.com',
      gender: 'M',
    },
  ];

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
    {
      title: 'Action',
      key: 'Action',
      render: (text: any, record: any) => (
        <div className="space-x-3">
          <Button>
            <FiMessageCircle />
          </Button>
          <Button danger type="primary">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">Mentors</h1>
      </div>

      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Mentors;
