import React from "react";
import { Heading, Flex, Button } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { ChatIcon, MoonIcon } from '@chakra-ui/icons'

const Header = props => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="12px"
      color="white"
      bgColor="purple.900"
      height="13px"
      {...props}
    >
      <Flex
      align="center"
      justify="space-evenly"
      width="300px"
      >
        <Heading as="h1" size="md" letterSpacing={"-.1rem"}>
        Codespace
        </Heading>
        <Button
        size="sm"
        rounded="md"
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["DarkSlateBlue", "DarkSlateBlue", "primary.900", "primary.900"]}
        _hover={{
          bg: [
            "primary.100",
            "primary.100",
            "primary.600",
            "primary.600",
          ],
        }}
        >
          Following
        </Button>
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
          Browse
        </Button>
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
