'use client';

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';



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
     {
      title: "Action",
      key: "action",
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
    <div className="p-4">
      <div>
        <h1 className="text-xl">Teachers</h1>
      </div>

      <Table dataSource={data?.filter((user)=>user.role=="teacher")} columns={columns} />
    </div>
  );
};

export default Users;
