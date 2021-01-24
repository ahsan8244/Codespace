import { React } from "react";
import {
  Box,
  Flex,
  Input,
  Fade,
  Text,
  Center,
  Button,
  ButtonGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'

import { Link } from "react-router-dom";
import LiveStream from "./LiveStream";


const Browse = () => {
    return (
    
<Flex direction="column" align="center">
    <Center p={50} flexDirection="column">
    <Text padding="1px" fontSize="3xl" color="white">
        Browse similar videos
    </Text>
    <Flex>
        <ArrowLeftIcon color="white"/>
        <ArrowRightIcon color="white"/>
    </Flex>

    <LiveStream/>
    
    </Center>    
    </Flex>
  
  )
    

}

export default Browse;