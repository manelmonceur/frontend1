'use client';

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';

const Users = () => {
  const data = [
    {
      firstName: 'Ahmed',
      lastName: 'Ben Ahmed',
      phone: '55 148 963',
      email: 'ahmed@gmail.com',
      gender: 'M',
      n_students: 5,
    },
    {
      firstName: 'Aymen',
      lastName: 'Sasi',
      phone: '53 348 963',
      email: 'Aymen@gmail.com',
      gender: 'M',
      n_students: 41,
    },
    {
      firstName: 'Fatma',
      lastName: 'Ben Ahmed',
      phone: '55 148 473',
      email: 'Fatma@gmail.com',
      gender: 'F',
      n_students: 12,
    },
    {
      firstName: 'Walid',
      lastName: 'Tonsi',
      phone: '99 486 324',
      email: 'walid@gmail.com',
      gender: 'M',
      n_students: 21,
    },
    {
      firstName: 'Tawfik',
      lastName: 'labiedh',
      phone: '22 475 968',
      email: 'tawfik@gmail.com',
      gender: 'M',
      n_students: 8,
    },
  ];

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
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: ' Number Of Students',
      dataIndex: 'n_students',
      key: 'n_students',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          <Button
          // onClick={() => {
          //   setEditedMeet(record);
          //   setIsMeetModalOpen(true);
          // }}
          >
            <FiMessageCircle />
          </Button>
          <Button
            type="primary"
            danger
            // onClick={() => {
            //   modal.confirm({
            //     title: "Are you sure you want to delete this child?",
            //     onOk: async () => {
            //       await axios.delete(`/child/${record._id}`);
            //       await mutate("/child");
            //       message.success("Child deleted successfully");
            //     },
            //   });
            // }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 space-x-3">
      <div>
        <h1 className="text-xl">Teachers</h1>
      </div>

      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Users;
