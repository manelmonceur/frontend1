import React, { FC } from 'react'
import {
    Flex,
    Heading,
    Icon
} from '@chakra-ui/react'

interface Props{
    title: string
    icon: any   
}

const  NavHoverBox:FC<Props> =({ title, icon }) =>{
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid #82AAAD"
            />
            <Flex
                h={200}
                w={200}

                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor="#82AAAD"
                borderRadius="10px"
                color="#fff"
                textAlign="center"
            >
                <Icon as={icon} fontSize="3xl" mb={4} />
                <Heading size="md" fontWeight="normal">{title}</Heading>

            </Flex>
        </>
    )
}
export default NavHoverBox