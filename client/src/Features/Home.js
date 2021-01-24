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
      <Center w="100%" p={100} flexDirection="column">
        <Text fontSize="3xl" color="white">
          Space to code together and learn together :)
        </Text>
        <Text padding="15px" fontSize="2xl" color="white">
          Join or create your space
        </Text>
      </Center>
      <Center>
        <Box mt="2" shadow="md">
          <Input
            padding="10px"
            placeholder="Input the url"
            size="sm"
          />
        </Box>
      </Center>
      <Center w="100%" p={5} flexDirection="column">
        <ButtonGroup variant="outline" colorScheme="purple" spacing="6">
          <Button onClick={onToggle} colorScheme="purple">
            Watch
          </Button>

          <Link to="/start-stream/23434">
            <Button>Start Coding!</Button>
          </Link>
            
        </ButtonGroup>
      </Center>
    </Flex>
  );
};

export default Home;