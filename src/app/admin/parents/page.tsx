'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../../utils/fetcher';
import { Modal, Table } from 'antd';
import { Button, Space } from 'antd';
import { FiMessageCircle } from 'react-icons/fi';
import { activateParent, deleteParent, getParent } from '@/services/apiService';
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
  const [parents, setParents] = useState([]);
  const [open, setOpen] = useState(false);

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
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space>
          <Button>
            <FiMessageCircle />
          </Button>

          <Button
            type="primary"
            danger
            onClick={() => {
              handleDelete(record._id);
            }}
          >
            Delete
          </Button>
          <Button onClick={() => setOpen(true)}>Details</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">Parents</h1>
      </div>

      <Table
        dataSource={parents.filter((p) => p.activate == true)}
        columns={columns}
      />
      <ModalProfile open={open} close={() => setOpen(false)} user={null} />
    </div>
  );
};

export default Users;

const ModalProfile = ({ open, close, user }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Grad',
      dataIndex: 'grad',
      key: 'grad',
    },
    {
      title: 'Teacher Name',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: 'Teacher Email',
      dataIndex: 'teacher_email',
      key: 'teacher_email',
    },
  ];

  const data = [
    {
      name: 'Ahmed',
      teacher: 'Walid',
      teacher_email: 'walid@gmail.com',
      gender: 'Male',
      grad: '3 eme',
    },
    {
      name: 'Tawfik',
      teacher: 'Walid',
      teacher_email: 'walid@gmail.com',
      gender: 'Male',
      grad: '5 eme',
    },
  ];
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
        <Table dataSource={data} columns={columns} />
      </Box>
    </Modal>
  );
};
