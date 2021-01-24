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
//import { ReactComponent as YourSvg } from '/waves.svg'

import { Link } from "react-router-dom";
function makeid() {
    let r = Math.random().toString(36).substr(2, 4);
    alert(r)
    return r;
 }

const GoLive= () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    
    <Flex direction="column" align="center">
      <Center p={200} flexDirection="column">
        <Text padding="15px" fontSize="3xl" color="white">
         Input streaming link below
        </Text>
        <Box shadow="md" color="white">
          <Input
            padding="15px"
            colorScheme="primary.900"
            placeholder="Input the streaming link"
            size="sm"
          />
        </Box>
        <ButtonGroup padding="15px" variant="outline" colorScheme="purple" spacing="6">
          <Button onClick={makeid} colorScheme="purple">
            Generate code
          </Button>
          <Fade in={makeid}>
            <Box mt="2" shadow="md">

            </Box>
          </Fade> 
        </ButtonGroup>
        
      </Center>    
    </Flex>
  );
};

export default GoLive;