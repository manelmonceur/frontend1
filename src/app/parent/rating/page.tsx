'use client';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  AvatarBadge,
} from '@chakra-ui/react';

import { Form, Input, InputNumber, Rate } from 'antd';
import { IoIosStar } from 'react-icons/io';

export default function Ratting() {
  return (
    <Center py={6}>
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
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Give feedback
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          What do you think ?
        </Text>

        <Form
          layout="vertical"
          name="nest-messages"
          className="pt-10 flex flex-col justify-center"
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name={'rate'}
            required
            rules={[{ required: true, message: 'Rate is required' }]}
          >
            <Rate character={<IoIosStar size={40} />} className="!flex"/>
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input placeholder="description" className="!w-full" />
          </Form.Item>
        </Form>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            className="flex items-center justify-center gap-2"
          >
            Send
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            className="flex items-center justify-center gap-2"
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
