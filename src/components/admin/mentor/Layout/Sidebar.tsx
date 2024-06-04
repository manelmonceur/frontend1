"use client"
import React, { useEffect, useState } from 'react'
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
} from '@chakra-ui/react'

import { FcNext } from 'react-icons/fc'
import { MdLockOutline, MdPersonOutline } from 'react-icons/md'
import {
    MdAutoStories,
    MdHomeFilled,
    MdCalendarMonth,
    MdOutlineMessage,

} from 'react-icons/md'
import { LuUsers2 } from 'react-icons/lu'
import NavItem from './NavItem'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

export default function Sidebar() {
    const router = useRouter()
    const path = usePathname()
    const { data: session, status } = useSession()
    const [navSize, changeNavSize] = useState('large')

 


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
                        navSize == 'small' ? (
                            <FcNext />
                        ) : (
                            <FcNext className="rotate-180" />
                        )
                    }
                    onClick={() => {
                        if (navSize == 'small') changeNavSize('large')
                        else changeNavSize('small')
                    }}
                />
                <NavItem
                    navSize={navSize}
                    icon={MdHomeFilled}
                    title="Dashboard"
                    active={
                        path == '/mentor/dashboard' ? true : false
                    }
                    url="/mentor/dashboard"
                />
               
                <NavItem
                    navSize={navSize}
                    icon={MdCalendarMonth}
                    title="Calendar"
                    active={path == '/mentor/calender' ? true : false}
                    url="/mentor/calender"
                />
             
                <NavItem
                    navSize={navSize}
                    icon={LuUsers2}
                    title="Parents"
                    active={
                        path == '/mentor/parents' ? true : false
                    }
                    url="/mentor/parents"
                />
                <NavItem
                    navSize={navSize}
                    icon={LuUsers2}

                    title="Admins"
                    active={
                        path == '/mentor/admins' ? true : false
                    }
                    url="/mentor/admins"
                />
                <NavItem
                    navSize={navSize}
                    icon={LuUsers2}
                    title="Teachers"
                    active={
                        path == '/mentor/teachers' ? true : false
                    }
                    url="/mentor/teachers"
                />
                <NavItem
                    navSize={navSize}
                    icon={MdOutlineMessage}
                    title="Message"
                    active={
                        path == '/mentor/message' ? true : false
                    }
                    url="/mentor/message"
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
                                <Heading as="h3" size="sm" textColor={"white"}>
                                    {/* {session.user.name} */}Mentor
                                </Heading>
                                <Text color="gray">Mentor</Text>
                            </Flex>
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => router.push('/mentor/profile')}
                            gap={2}
                        >
                            <MdPersonOutline size={20} /> Account Details
                        </MenuItem>
                        <MenuDivider />

                        <MenuItem
                            gap={2}
                            onClick={async () => {
                                await signOut({ redirect: false })
                                router.push('/')
                            }}
                        >
                            <MdLockOutline size={20} />
                            Log Out
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}
