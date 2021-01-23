import { Flex, Text } from "@chakra-ui/react";

const FileLabel = ({ onSelect, isSelected, filename }) => {
  return (
    <Flex
      p={1}
      color="white"
      bgColor={isSelected ? "#212121" : ""}
      onClick={() => onSelect()}
      _hover={{ cursor: "pointer" }}
    >
      <Text fontSize="xs">{filename}</Text>
    </Flex>
  )
}

export default FileLabel;