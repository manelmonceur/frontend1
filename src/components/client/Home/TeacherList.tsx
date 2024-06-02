'use client';

import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  AvatarBadge,
} from '@chakra-ui/react';

const Cours = () => {
  return (
    <section className="py-24 bg-gray-100 ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
          Our Teachers
        </h2>
        <div className="flex gap-3 py-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Cours;

//
const Card = () => {
  return (
    <Box
      maxW={'520px'}
      w={'full'}
      className="profile-card"
      boxShadow={'2xl'}
      rounded={'xl'}
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
        Enseignant
      </Text>
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}
      >
        10 ans d&apos;experience
      </Text>

      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.700', 'gray.400')}
        px={3}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </Text>
    </Box>
  );
};
