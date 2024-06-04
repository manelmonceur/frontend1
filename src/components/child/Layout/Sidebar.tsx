'use client';
import React, { useEffect, useState } from 'react';
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
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import {
  MdAutoStories,
  MdHomeFilled,
  MdOutlineCastForEducation,
  MdCalendarMonth,
  MdOutlineMessage,
  MdOutlineQuiz,
} from 'react-icons/md';
import NavItem from './NavItem';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const path = usePathname();
  const [navSize, changeNavSize] = useState('large');

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
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
        w="100%"
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
          icon={() => (
            <svg
              className="w-6 h-6 text-gray-300 group-hover:text-gray-800 transition duration-75"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
          )}
          title="Dashboard"
          active={path == '/children/dashboard' ? true : false}
          url="/children/dashboard"
        />

        <NavItem
          navSize={navSize}
          icon={MdOutlineCastForEducation}
          title="Courses"
          active={path == '/children/courses' ? true : false}
          url="/children/cours"
        />
        <NavItem
          navSize={navSize}
          icon={MdCalendarMonth}
          title="Calender"
          active={path == '/children/calender' ? true : false}
          url="/children/calender"
        />
        <NavItem
          navSize={navSize}
          icon={MdOutlineQuiz}
          title="Quiz"
          active={path == '/children/quiz' ? true : false}
          url="/children/quiz"
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
                  {/* {session.user.name} */}child
                </Heading>
                <Text color="gray">Student</Text>
              </Flex>
            </Flex>
          </MenuButton>
        </Menu>
      </Flex>
    </Flex>
  );
}
