import React from "react";
import { Heading, Flex } from "@chakra-ui/react";

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
      <Flex align="center">
        <Heading as="h2" size="md" letterSpacing={"-.1rem"}>
          Codespace
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
