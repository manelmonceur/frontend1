'use client';
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import { MdMissedVideoCall } from 'react-icons/md';
import axios from 'axios';


const Calender = () => {
  const [open, setOpen] = useState(false);
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-05-20' },
    { title: 'Event 2', date: '2024-05-21' },
  ]);

  const handleDateClick = (arg: any) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }]);
    }
  };

  return (
    <div className="p-16">
      {/* button add events */}
      <div className='flex w-full justify-end py-2'>
         <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
        Add Event
      </button>
      </div>
     
      
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height={900}
        dateClick={handleDateClick}
      />
      <ModalAddMeeting open={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Calender;

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
          label="Select Child"
          name={'Select Child'}
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
                  value: "john",
                  label: "john",
                },
                {
                  value: "doe",
                  label: "doe",
                },
                {
                  value: "smith",
                  label: "smith",
                },
                {
                  value: "jane",
                  label: "jane",

                }
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