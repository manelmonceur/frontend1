'use client';
import UpdateProfile from '@/components/parent/Modal/UpdateProfile';
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
import { useState } from 'react';
import { CiEdit, CiLogout } from 'react-icons/ci';

export default function Profile() {
  const [isOpeen, setIsOpeen] = useState(false);

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
        <Avatar>
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>

        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Ahmed Aloui
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          Male
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          ahmedal@gmail.com
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          +216 22 333 444
        </Text>

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
            onClick={() => setIsOpeen(true)}
          >
            <CiEdit size={24} />
            Update
          </Button>
        </Stack>
      </Box>
      <UpdateProfile isOpen={isOpeen} close={() => setIsOpeen(false)} />
    </Center>
  );
}
