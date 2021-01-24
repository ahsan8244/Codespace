import { Flex, Text } from "@chakra-ui/react";

const FileLabel = ({ onSelect=() => {}, isSelected, filename, avatar=<></> }) => {
  return (
    <Flex
      p={1}
      color="white"
      bgColor={isSelected ? "purple.600" : ""}
      onClick={() => onSelect()}
      _hover={{ cursor: "pointer" }}
      justify="space-between"
      align="center"
    >
      <Text fontSize="xs">{filename}</Text>
      {avatar}
    </Flex>
  )
}

export default FileLabel;