import Navbar from '@/components/admin/Layout/NavBar';
import '../globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'PFE',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Flex w="100%" bg={'gray.100'} h={'100vh'}>
        <Navbar />
        <Box w={'100%'} px={'20px'} h={'100vh'} overflow={'auto'}>
          {children}
        </Box>
      </Flex>
    </>
  );
}
