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
  Image
} from "@chakra-ui/react";
import { ReactComponent as CoderSVG } from "../coder.svg";

import { Link } from "react-router-dom";

const Home = () => {
  const { isOpen, onToggle } = useDisclosure();


  return (
    <Box overflow="scroll">
    <Flex color="white" justify="space-between" pr={4} mb={12}>
      <Flex direction="column" justifyContent="center" pl={4} pr={4}>
        <Text fontSize="4xl" fontWeight="bold">Codespace</Text>
        <Text>Interactive & real-time coding workshops </Text>
        <Flex mt={4}>
          <Link to="/browse">
            <Button colorScheme="purple">Find a workshop</Button>
          </Link>
        </Flex>
      </Flex>
      <Box p={4} as={CoderSVG} w="50%" />
    </Flex>
    <Flex
      bgColor="white"
      borderRadius="12px"
      p={4}
      align="center"
      direction="column"
    >
      <Text mb={8} fontSize="2xl" fontWeight="bold">Live coding workshops re-imagined.</Text>
      <Image src="https://cdn.discordapp.com/attachments/801146947670900739/802836334687420436/Screenshot_2021-01-24_at_5.44.51_PM.png" />
    </Flex>
    </Box>
  );
};

export default Home;