import React from 'react'
import { ChatState } from '../../Context/ChatProvider';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { getSender, getSenderFull } from '../config/ChatLogic';
import ProfileModal from './ProfileModal';

const SingleChat = () => {
    const { user, selectedChat, setSelectedChat } = ChatState();
    return (
        <>{
            selectedChat ? (
                <>
                    <Text
                        fontSize={{ base: "28px", md: "30px" }}
                        pb={3}
                        px={2}
                        width={"100%"}
                        fontFamily="Lato"
                        display="flex"
                        justifyContent={{ base: "space-between" }}
                        alignItems={"center"}
                    >
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            icon={<ArrowBackIcon />}
                            onClick={() => setSelectedChat("")}
                        />
                        {!selectedChat.isGroupChat ? (
                            <>
                                {getSender(user, selectedChat.users)}
                                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
                            </>
                        ) : (
                            <>
                                {selectedChat.chatName.toUpperCase()}
                                {/* <UpdatedGroupChatModal
                                     fetchAgain={fetchAgain}
                                     setFetchAgain={setFetchAgain}
                                     /> */}


                            </>
                        )}
                    </Text>
                </>
            ) : (
                <Box display="flex" alignItems="center" justifyContent="center" h="100%">
                </Box>
            )
        }</>
    )
}

export default SingleChat