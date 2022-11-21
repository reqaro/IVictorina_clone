import React from 'react';
import './PlayerBadgeGameStyle.scss';
import {Box, Heading, Input} from "@chakra-ui/react";

export const PlayerBadgeGameView = ({ player, idx }) => {
    return (
        <Box
            w={"100%"}
            key={idx}
            px="5px"
            py="10px"
            border={"1px solid rgba(12, 139, 116, 1)"}
            borderRadius="16px"
            display={"flex"}
            alignItems="center"
            justifyContent={"space-around"}
        >
            <Heading>{player}</Heading>
            <Input
                fontSize={"20px"}
                borderRadius={"16px"}
                width="70%"
                py="20px"
            />
        </Box>
    );
};