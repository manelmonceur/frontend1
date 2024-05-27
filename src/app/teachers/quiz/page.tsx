"use client";
import CardQuiz from '@/components/admin/teacher/Card/CardQuiz'
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    SimpleGrid,
    Stack,
    StackDivider,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link';


import React, { useState } from 'react'


const Quiz = () => {

    const colors = useColorModeValue(
        ['red.50', 'blue.50'],
        ['red.900', 'blue.900']
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]


   

    return (
        <Box w={'100%'} p={6}>
            <Heading textAlign={'center'} py={16}>
                Mes Quiz
            </Heading>
            <Flex w="full" justifyContent="flex-end">
                <Link href="/teachers/addQuiz">
                  
                    Add QCM
                </Link>
            </Flex>
            <Tabs
                isFitted
                variant="enclosed"
                onChange={(index) => setTabIndex(index)}
                bg={bg}
            >
                <TabList mb="1em">
                    <Tab>Quiz</Tab>
                    <Tab>Quiz Terminer</Tab>
                </TabList>
                <TabPanels overflow={'auto'}>
                    <TabPanel>
                        <SimpleGrid spacing={4} columns={[2, null, 4]} pb={16}>
                            {[]?.map((item, key) => (
                                <CardQuiz
                                    item={item}
                                    key={key}
                                    subscribe={true}
                                />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid spacing={4} columns={[2, null, 4]} pb={16}>
                            {[]?.map((item, key) => (
                                <Card key={key}>
                                    <CardHeader>
                                        <Heading size="md">
                                            {item.qcm.name}
                                        </Heading>
                                    </CardHeader>

                                    <CardBody>
                                        <Stack
                                            divider={<StackDivider />}
                                            spacing="4"
                                        >
                                            <Box>
                                                <Heading
                                                    size="xs"
                                                    textTransform="uppercase"
                                                >
                                                    Cour
                                                </Heading>
                                                <Text pt="2" fontSize="sm">
                                                    {item.qcm.course.title}
                                                </Text>
                                            </Box>

                                            <Box>
                                                <Heading
                                                    size="xs"
                                                    textTransform="uppercase"
                                                >
                                                    Note
                                                </Heading>
                                                <Text pt="2" fontSize="sm">
                                                    {item.note} %
                                                </Text>
                                            </Box>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Quiz

