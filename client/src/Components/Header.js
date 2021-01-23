import React from "react";
import { Heading, Flex, Button } from "@chakra-ui/react";

const Header = props => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="12px"
      color="white"
      bgColor="purple.900"
    
      {...props}
    >

      <Heading as="h2" size="md" letterSpacing={"-.1rem"}>
        Codespace
      </Heading>
      <Button
        size="sm"
        rounded="md"
        color={["primary.500", "primary.500", "black", "black"]}
        bg={["BlueViolet", "BlueViolet", "primary.800", "primary.800"]}
        _hover={{
          bg: [
            "primary.100",
            "primary.100",
            "primary.600",
            "primary.600",
          ],
        }}
      >
        Profile
      </Button>
    </Flex>

  );
};

export default Header;
