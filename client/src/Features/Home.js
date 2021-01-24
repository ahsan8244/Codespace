import { React } from "react";
import {
  Box,
  Flex,
  Input,
  Square,
  Text,
  Center,
  Button,
  Stack,
  ButtonGroup,
  Fade,
  ScaleFade,
  Slide,
  Grid,
  GridItem,
  SlideFade,
  useDisclosure,
} from "@chakra-ui/react";
//import { ReactComponent as YourSvg } from '/waves.svg'

import { Link } from "react-router-dom";

const Home = () => {
  const { isOpen, onToggle } = useDisclosure();


  return (
    
    <Flex direction="column" align="center">
      <Center p={200} flexDirection="column">
        <Text fontSize="3xl" color="white">
          Space to code together and learn together :)
        </Text>
        <Text padding="15px" fontSize="2xl" color="white">
          Join or create your space
        </Text>
        <Box shadow="md" color="white">
          <Input
            padding="15px"
            colorScheme="primary.900"
            placeholder="Input the room code"
            size="sm"
          />
        </Box>
        <ButtonGroup padding="15px" variant="outline" colorScheme="purple" spacing="6">
          <Button onClick={onToggle} colorScheme="purple">
            Watch
          </Button> 
        </ButtonGroup>
        
      </Center>    
    </Flex>
  );
};

export default Home;
