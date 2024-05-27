import '../globals.css';
import type { Metadata } from 'next';
import { Box, HStack } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Flex, Text, IconButton } from '@chakra-ui/react';
import Sidebar from '@/components/child/Layout/Sidebar';

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
    <Flex w="100%" h={'100vh'}>
      <Sidebar />
      <Box w={'100%'} px={'200px'} h={'100vh'} overflow={'auto'}>
        {children}
      </Box>
    </Flex>
  );
}
