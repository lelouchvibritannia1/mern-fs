import React from 'react'
import { Container, Box, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'


const Homepage = () => {
    return (
        <Container maxW='xl' centerContent>
            <Box
                d='flex'
                justifyContent="center"
                padding={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="1g"
                borderWidth="1px"
            >
                <Text fontSize='4xl' color={"black"} >
                    Web Chat
                </Text>
            </Box>
            <Box bg={"white"} w="100%" p={4} borderRadius={"1g"} borderWidth={"1px"}>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width={"50%"}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
};

export default Homepage;