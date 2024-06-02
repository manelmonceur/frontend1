import Sidebar from '@/components/parent/Layout/Sidebar';
import '../globals.css';
import type { Metadata } from 'next';
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
    <Flex w="100%" bg={'gray.100'} h={'100vh'}>
      <Sidebar />
      <Box w={'100%'} px={'20px'} h={'100vh'} overflow={'auto'}>
        {children}
      </Box>
    </Flex>
  );
}
