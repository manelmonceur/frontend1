'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiUserPlus } from 'react-icons/hi2';
import { AiOutlineCreditCard } from 'react-icons/ai';
import {
  MdCalendarMonth,
  MdHomeFilled,
  MdLockOutline,
  MdMissedVideoCall,
  MdOutlineCastForEducation,
  MdOutlineMessage,
  MdOutlineQuiz,
  MdPersonOutline,
} from 'react-icons/md';
import { RiParentLine } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';
import { Popover } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Menu,
} from '@chakra-ui/react';
import { FcNext } from 'react-icons/fc';
import NavItem from '../mentor/Layout/NavItem';

const content = (
  <>
    <div className="flex flex-col space-y-3 min-w-[200px]">
      <button className="w-full text-left">Profile</button>
      <button className="w-full text-left">Logout</button>
    </div>
  </>
);

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const [navSize, changeNavSize] = useState('large');

  return (
    <Flex
      pos="sticky"
      left="5"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == 'small' ? '15px' : '30px'}
      w={navSize == 'small' ? '75px' : '200px'}
      flexDir="column"
      bg={'#0b0840'}
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          aria-label=""
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          icon={
            navSize == 'small' ? <FcNext /> : <FcNext className="rotate-180" />
          }
          onClick={() => {
            if (navSize == 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />
        <NavItem
          navSize={navSize}
          icon={MdHomeFilled}
          title="Dashboard"
          active={path == '/admin/dashboard' ? true : false}
          url="/admin/dashboard"
        />
        <NavItem
          navSize={navSize}
          icon={MdMissedVideoCall}
          title="Meetings"
          active={path == '/admin/meetings' ? true : false}
          url="/admin/meetings"
        />
        <NavItem
          navSize={navSize}
          icon={RiParentLine}
          title="Pending Accounts"
          active={path == '/admin/pending_accounts' ? true : false}
          url="/admin/pending_accounts"
        />
        <NavItem
          navSize={navSize}
          icon={() => (
            <svg
              className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-800 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
            </svg>
          )}
          title="Admins"
          active={path == '/admin/admins' ? true : false}
          url="/admin/admins"
        />
        <NavItem
          navSize={navSize}
          icon={() => (
            <svg
              className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-800 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          title="Mentors"
          active={path == '/admin/mentors' ? true : false}
          url="/admin/mentors"
        />
        <NavItem
          navSize={navSize}
          icon={() => (
            <svg
              className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-800 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          )}
          title="Teachers"
          active={path == '/admin/teachers' ? true : false}
          url="/admin/teachers"
        />

        <NavItem
          navSize={navSize}
          icon={RiParentLine}
          title="Parents"
          active={path == '/admin/parents' ? true : false}
          url="/admin/parents"
        />

        <NavItem
          navSize={navSize}
          icon={HiUserPlus}
          title="Add User"
          active={path == '/admin/addAdmin' ? true : false}
          url="/admin/addAdmin"
        />

        <NavItem
          navSize={navSize}
          icon={AiOutlineCreditCard}
          title="Payments"
          active={path == '/admin/payments' ? true : false}
          url="/admin/payments"
        />
        <NavItem
          navSize={navSize}
          icon={MdOutlineMessage}
          title="Messages"
          active={path == '/admin/message' ? true : false}
          url="/admin/message"
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize == 'small' ? 'none' : 'flex'} />

        <Menu>
          <MenuButton px={4} py={2} transition="all 0.2s">
            <Flex mt={4} align="center">
              {' '}
              <Avatar size="sm" src="avatar-1.jpg" />
              <Flex
                flexDir="column"
                ml={4}
                display={navSize == 'small' ? 'none' : 'flex'}
              >
                <Heading as="h3" size="sm" textColor={'white'}>
                  {/* {session.user.name} */}Super Admin
                </Heading>
                <Text color="gray">Admin</Text>
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => router.push('/admin/profile')} gap={2}>
              <MdPersonOutline size={20} /> Account Details
            </MenuItem>
            <MenuDivider />

            <MenuItem
              gap={2}
              onClick={async () => {
                router.push('/');
              }}
            >
              <MdLockOutline size={20} />
              Log out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
