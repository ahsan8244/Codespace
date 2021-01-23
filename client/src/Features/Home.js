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

    
    <Flex direction="column">
      <Center w="100%" p={50} flexDirection="column">
        <Text fontSize="3xl" color="white">
          Space to code together and learn together :)
        </Text>
        <Text fontSize="2xl" color="white">
          Join or create your space
        </Text>
      </Center>
      <Center w="100%" p={5} flexDirection="column">
        <ButtonGroup variant="outline" colorScheme="purple" spacing="6">
          <Button onClick={onToggle} colorScheme="purple">
            Join
          </Button>
          <Fade in={isOpen}>
            <Box mt="2" shadow="md">
              <Input
                padding="10px"
                placeholder="Input the room code"
                size="sm"
              />
            </Box>
          </Fade>
          <Link to="/start-stream/23434">
            <Button>Stream</Button>
          </Link>
        </ButtonGroup>
        <Box>
        <Text  w="100px" h="100px" color="white" fontSize="2xl" color="white" >
           Explore
        </Text>
        </Box>
      </Center>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box w="100%" h="40" bg="purple.500" />
            <Box w="100%" h="40" bg="purple.500" />
            <Box w="100%" h="40" bg="purple.500" />
            <Box w="100%" h="40" bg="purple.500" />
            <Box w="100%" h="40" bg="purple.500" />
    </Grid>
    </Flex>
  );
};

export default Home;
