'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Modal, Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button as Btn,
  useColorModeValue,
  AvatarBadge,
} from '@chakra-ui/react';

const Users = () => {
  const [teacher, setTeacher] = useState(null);
  const [open, setOpen] = useState(false);

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
          
          <Button onClick={() => setOpen(true)}>Details</Button>
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
      <ModalProfile open={open} close={() => setOpen(false)} user={teacher} />
    </div>
  );
};

export default Users;

const ModalProfile = ({ open, close, user }) => {
  return (
    <Modal title="Profile" open={open} onCancel={close} footer={null}>
      <Box
        maxW={'520px'}
        w={'full'}
        className="profile-card"
        boxShadow={'2xl'}
        rounded={'lg'}
        gap={4}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        p={6}
        textAlign={'center'}
      >
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>

        <Heading fontSize={'2xl'} fontFamily={'body'}>
          John Doe
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @johndoe
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          exemple@gmail.com
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          +216 22 333 444
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Male
        </Text>
      </Box>
    </Modal>
  );
};
