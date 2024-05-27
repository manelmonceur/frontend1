'use client';
import React, {  useState } from 'react';
import { Form, Button, Input, Select, DatePicker, Modal, Space } from 'antd';
import axios from '@/utils/axios';
import { MdMissedVideoCall } from 'react-icons/md';
import { Table } from 'antd';

const Meetings = () => {
  const [open, setOpen] = useState(false);
  const data=[
  {
    "id": "1",
    "name": "Project Kickoff",
    "mentor": "Alice Johnson",
    "parent": "Robert Smith",
    "date": "15/05/2023 10:00"
  },
  {
    "id": "2",
    "name": "Weekly Sync",
    "mentor": "John Doe",
    "parent": "Jhone Smith",
    "date": "23/06/2014 15:40"
  },
  {
    "id": "3",
    "name": "Design Review",
    "mentor": "Emma Brown",
    "parent": "Linda Wilson",
    "date": "12/07/2023 14:00"
  },
  {
    "id": "4",
    "name": "Sprint Planning",
    "mentor": "Michael Davis",
    "parent": "David Johnson",
    "date": "30/08/2023 09:30"
  },
  {
    "id": "5",
    "name": "Retrospective",
    "mentor": "Sophia Martinez",
    "parent": "Emily Thomas",
    "date": "22/09/2023 16:00"
  }
]

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'mentor',
      dataIndex: 'mentor',
      key: 'mentor',
    },
    {
      title: 'Parent',
      dataIndex: 'parent',
      key: 'parent',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
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
            Edit
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
        <h1 className="text-xl">Meetings</h1>
      </div>
      <div className="flex justify-end">
        <Button
          type="primary"
          onClick={() => {
setOpen(true)
          }}
          className='!flex justify-center items-center gap-2 '
        >
         <MdMissedVideoCall size={24} /> Add Meeting
        </Button>
      </div>

      <Table dataSource={data} columns={columns} />
      <ModalAddMeeting open={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Meetings;


const ModalAddMeeting = ({ open, close }) => {
    const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (values: any) => {
    setLoading(true);
    try {
      await axios.post('/user', { ...values, role: role });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div>
     
      <Modal
        title="Add Meeting"
open={open}
        onCancel={close}
        footer={null}
      >
 <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        className="min-h-[600px] flex flex-col justify-center items-center"
        layout="vertical"
        onFinish={onSubmit}
      >


        <Form.Item
          label="Name"
          name="Name"
          rules={[{ required: true, message: 'Please input Name!' }]}
        >
          <Input className="w-[400px]" />
        </Form.Item>
        <Form.Item
          label="Select Parent"
          name="Select Parent"
          rules={[{ required: true, message: 'Please input Select Parent!' }]}
        >
          <Select
            className="!w-[400px]"
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: 'parent',
                label: 'parent',
              },
              {
                value: 'admin',
                label: 'admin',
              },
              {
                value: 'teacher',
                label: 'teacher',
              },
              {
                value: 'student',
                label: 'student',
              },
            ]}
            onChange={(value) => setRole(value)}
          />
        </Form.Item>
        <Form.Item
          label="Select Mentor"
          name={'Select Mentor'}
          rules={[{ required: true, message: 'Please input Select Mentor!' }]}
        >
          <Select
            className="!w-[400px]"
            showSearch
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
            }
            options={[
              {
                value: 'parent',
                label: 'parent',
              },
              {
                value: 'admin',
                label: 'admin',
              },
              {
                value: 'teacher',
                label: 'teacher',
              },
              {
                value: 'student',
                label: 'student',
              },
            ]}
            onChange={(value) => setRole(value)}
          />
        </Form.Item>
        <Form.Item
          label="Date"
          name="Date"
          rules={[{ required: true, message: 'Please input Date!' }]}
        >
          <DatePicker
            format="DD/MM/YYYY hh:mm A"
            onChange={(date, dateString) => console.log(date, dateString)}
            showTime={{ use12Hours: true }}
            className="w-[400px]"
          />
          </Form.Item>
        <Form.Item
            label="Link"
            name="Link"
          rules={[{ required: true, message: 'Please input Link!' }]}
          >
          
            <Input placeholder='Link ' className="w-[400px]"/>
          </Form.Item>


        <Form.Item>
          <div className="flex flex-col items-center gap-4">
            {' '}
            <Button
              className="flex items-center gap-4"
              htmlType="submit"
              loading={loading}
            >
              <MdMissedVideoCall size={24} /> Create
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
}