import {React} from "react";
import { Box, Flex, Input, Square, Text, Center, Button, Stack, ButtonGroup, Fade, ScaleFade, Slide, SlideFade, useDisclosure} from "@chakra-ui/react"


const Home = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (

    
        <Flex direction="column">
          <Center w="100%" p={50} flexDirection="column">
            <Text fontSize="3xl" color="white" >Space to code together and learn together :)</Text>
            <Text fontSize="2xl" color="white" >Join or create your space</Text>
          </Center>
          <Center w="100%" p={5} flexDirection="column">
          <ButtonGroup variant="outline" colorScheme="teal" spacing="6"> 
            <Button onClick={onToggle} colorScheme="teal">Join</Button>  
            <Fade in={isOpen}>
                <Box
                p="1px"
                color="white"
                mt="2"
                bg="teal.500"
                //rounded="md"
                shadow="md">
                <Input placeholder="Input the room code" size="sm" />

                </Box>
            </Fade>
            <Button>Stream</Button>
            </ButtonGroup>
        </Center>
        </Flex>




        
  )
}

export default Home;