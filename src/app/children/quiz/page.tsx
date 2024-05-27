'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Alert, Badge, Button, Space, Table } from 'antd';
import { title } from 'process';
import { render } from '@fullcalendar/core/preact.js';
import QuizModal from '@/components/child/quiz/QuizModal';

const Users = () => {
  const [isClient, setIsClient] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: any, record: any) => (
        <Alert
          type={record.status === 'Pending' ? 'warning' : 'success'}
          message={record.status}
          className="w-24"
        />
      ),
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Action',
      render: (text: any, record: any) => (
        <Space>
          {record.status === 'Pending' && (
            <Button
              type="primary"
              onClick={() => {
                setIsQuizOpen(true);
              }}
            >
              Start
            </Button>
          )}
        </Space>
      ),
    },
  ];

  if (!isClient) {
    return null; // or a loading spinner or placeholder
  }

  return (
    <div className="p-4">
      <div className="pb-2 flex justify-between">
        <h1 className="text-xl">My quiz</h1>
      </div>

      <Table
        dataSource={[
          { name: 'quiz', status: 'Pending' },
          { name: 'quiz', status: 'Done', note: '18/20' },
        ]}
        columns={columns}
      />

      <QuizModal isOpen={isQuizOpen} setIsOpen={setIsQuizOpen} />
    </div>
  );
};

export default Users;
