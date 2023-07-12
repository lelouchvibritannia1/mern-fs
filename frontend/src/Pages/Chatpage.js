import React, { useState, useEffect } from 'react';
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../components/misc/SideDrawer';
import MyChats from '../components/misc/MyChats';
import ChatBox from '../components/misc/ChatBox'
const Chatpage = () => {
    const { user } = ChatState();
    return (
        <div style={{ width: "100%" }}>
            {{ user } && <SideDrawer />}
            <Box
                d="flex"
                justifyContent={"space-between"}
                w="100%"
                h="91.5vh"
                p="10px"
            >
                {user && <MyChats />}
                {user && <ChatBox />}
            </Box>
        </div>
    )
}

export default Chatpage; 