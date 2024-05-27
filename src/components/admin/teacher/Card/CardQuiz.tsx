
import {
    Box,
    Text,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    HStack,
    IconButton,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    CardFooter,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { FC } from 'react'
import useSWR, { mutate } from 'swr'

interface Props {
    subscribe: boolean
    item: any
}

const CardQuiz: FC<Props> = ({ item, subscribe }) => {
 

    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size="md">Math</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <Heading size="xs" textTransform="uppercase">
                                deadLine
                            </Heading>
                            <HStack justifyContent={'space-between'}>
                                <Text pt="2" fontSize="sm">
                                    {format(
                                        new Date(item?.deadLine),
                                        'MM/dd/yyyy'
                                    )}
                                </Text>
                            </HStack>
                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter>
                    {' '}
                    <Link href={`/user/quizDetail?quizId=${item?.id}`}>
                        Consulter
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardQuiz
