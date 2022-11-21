import React from "react";
import "./SpectatorsWelcomeStyle.scss";
import { Box, Text, Image, Flex, Wrap } from "@chakra-ui/react";
import Img from "../../../assets/SpectatorsWelcome/WelcomeScreenImg.svg";
import Img2 from "../../../assets/SpectatorsWelcome/WelcomeScreenImg2.svg";
import Img3 from "../../../assets/SpectatorsWelcome/WelcomeScreenImg3.svg";

export const SpectatorsWelcomeView = () => {
  return (
    <Box bg="#2A2627" height="100%" position="relative">
      <Wrap flexDirection="row">
        <Box width="50px" marginTop="57vh" zIndex="10" marginLeft="5vw">
          <Text
            fontSize="4rem"
            fontWeight="700"
            lineHeight="116px"
            color="#FFFFFF"
            fontFamily="Inter"
            textTransform="uppercase"
          >
            ХЗ ЧТО ПРОИСХОДИТ
          </Text>
        </Box>
        <Box right="0">
          <Flex flexDirection="row" position="absolute" right="0">
            <Flex flexDirection="column">
              <Box width="50px" height="50px">
                <Image
                  src={Img2}
                  position="absolute"
                  bottom="16%"
                  left="37%"
                  w="10%"
                />
              </Box>
              <Box>
                <Image
                  src={Img3}
                  position="absolute"
                  bottom="30%"
                  left="43.5%"
                  w="1%"
                />
              </Box>
            </Flex>
            <Box overflow="hidden">
              <Image src={Img} h="100%" />
            </Box>
          </Flex>
        </Box>
      </Wrap>
    </Box>
  );
};
