'use client';

import React from 'react';
import useSWR from 'swr';
import { Button, Space, Table } from 'antd';
import { Course } from '../../../../types/api';
import { fetcher } from '../../../../utils/fetcher';

const Users = () => {
  // const { data: courses } = useSWR<Course[]>('/course', fetcher);
  const courses = [
    {
      name: 'Chapter 2',
      subject: 'Math',
      link: 'https://math.com/221',
      author: 'Mr Samir Chatbori',
    },
    {
      name: 'First subject',
      subject: 'English',
      link: 'https://EN.com/554',
      author: 'Mr Ahmed midoun',
    },
    {
      name: 'Gravity chapter 3',
      subject: 'Physique',
      link: 'https://phy.com/221',
      author: 'Mr Jamil ben amor',
    },
  ];

  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Published By',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: Course) => (
        <Space>
          <Button
            onClick={() => {
              fetch(record.path, {
                method: 'GET',
              })
                .then((response) => {
                  if (response.status !== 200) {
                    throw new Error('Sorry, I could not find that file.');
                  }
                  return response.blob();
                })
                .then((blob) => {
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.style.display = 'none';
                  a.href = url;
                  a.setAttribute('download', record.name);
                  document.body.appendChild(a);
                  a.click();
                  window.URL.revokeObjectURL(url);
                });
            }}
          >
            Download
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="pb-2 flex justify-between">
        <h1 className="text-xl">My courses</h1>
      </div>

      <Table dataSource={courses} columns={columns} />
    </div>
  );
};

export default Users;
