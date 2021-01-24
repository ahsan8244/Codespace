import React from "react";
import { Heading, Flex, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { ChatIcon, MoonIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="12px"
      color="white"
      bgColor="purple.900"
      height="13px"
      boxShadow="rgba(0, 0, 0, 0.3) 0px 4px 5px"
      zIndex={10}
      {...props}
    >
      <Flex
      align="center"
      width="350px"
      >
        <Heading as="h1" size="md" letterSpacing={"-.1rem"}>
        Codespace
        </Heading>
        <Link to="/browse">
        <Button
        ml={6}
        size="sm"
        rounded="md"
        mr={2}
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["DarkSlateBlue", "DarkSlateBlue", "primary.800", "primary.800"]}
        _hover={{
          bg: [
            "primary.100",
            "primary.100",
            "primary.600",
            "primary.600",
          ],
        }}
        >
          Browse
        </Button>
        </Link>
        <Link to="/go-live">
          <Button
          size="sm"
          rounded="md"
          color={["primary.500", "primary.500", "white", "white"]}
          bg={["DarkSlateBlue", "DarkSlateBlue", "primary.800", "primary.800"]}
          _hover={{
            bg: [
              "primary.100",
              "primary.100",
              "primary.600",
              "primary.600",
            ],
          }}
          >
            Go Live!
          </Button>
        </Link>
      </Flex>
      
      <Flex
      align="center"
      justify="space-evenly"
      width="150px"
      >
        <IconButton
        size="sm"
        rounded="md"
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["DarkSlateBlue", "DarkSlateBlue", "primary.800", "primary.800"]}
        _hover={{
          bg: [
            "primary.100",
            "primary.100",
            "primary.600",
            "primary.600",
          ],
        }}
          icon={<ChatIcon w={4} h={4}/>}
        />
        <IconButton
        size="sm"
        rounded="md"
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["DarkSlateBlue", "DarkSlateBlue", "primary.800", "primary.800"]}
        _hover={{
          bg: [
            "primary.100",
            "primary.100",
            "primary.600",
            "primary.600",
          ],
        }}
            icon={<MoonIcon w={4} h={4}/>}
        />
        <Avatar size="xs" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
     
      </Flex>
    </Flex>

  );
};

export default Header;
