import { React, useState } from "react";
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
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function makeid() {
    return uuidv4();
 }

const GoLive= () => {
  const { isOpen, onToggle } = useDisclosure();
  const [youtubeLiveId, setYoutubeLiveId] = useState("");

  return (
    
    <Flex direction="column" align="center" p={100} color="white">
          <Input
            colorScheme="primary.900"
            placeholder="Title"
            mb={4}
          />
          <Input
            colorScheme="primary.900"
            placeholder="YouTube live URL"
            value={youtubeLiveId}
            onChange={e => setYoutubeLiveId(e.target.value)}
          />
        <ButtonGroup padding="15px" variant="outline" colorScheme="purple" spacing="6">
          <Link to={`/start-stream/${makeid()}/${youtubeLiveId}`}>
            <Button colorScheme="purple">
              Start streaming!
            </Button>
          </Link>
          <Fade in={makeid}>
            <Box mt="2" shadow="md">

            </Box>
          </Fade> 
        </ButtonGroup>
    </Flex>
  );
};

export default GoLive;