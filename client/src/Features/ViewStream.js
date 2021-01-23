import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  IconButton,
  Circle,
  Tooltip,
} from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import FileLabel from "../Components/FileLabel";
import { io } from "socket.io-client";
import { CgGitFork } from "react-icons/cg";

const ViewStream = () => {
  const [code, setCode] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [forks, setForks] = useState({});

  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    socket.current.on("connect", () => {
      socket.current.emit("join_stream", "33944");
    });

    socket.current.on("read_code", (codeReceived) => {
      setCode(codeReceived);
    });

    socket.current.on("current_file_change", (filename) => {
      setSelectedFile(filename);
    });
  }, []);

  return (
    <Flex alignItems="stretch" height="100%">
      <Box flex={1}>
        <Flex height="100%">
          <Box flex={0.1} height="100%" bgColor="purple.900" color="white">
            <Flex p={2} bgColor="purple.800" justify="space-between">
              <Text fontSize="xs" fontWeight="bold">
                FILES
              </Text>
            </Flex>
            {Object.keys(code).map((filename, index) => (
              <FileLabel
                key={index}
                filename={filename}
                isSelected={selectedFile === filename}
              />
            ))}
          </Box>
          <Box style={{ flex: 0.8 }}>
            <Editor
              options={{ readOnly: true }}
              defaultLanguage="html"
              theme="vs-dark"
              value={code[selectedFile]}
              onChange={(updatedCode) => {
                const codeToSend = {
                  ...code,
                  [selectedFile]: updatedCode,
                };
                socket.current?.emit("write_code", codeToSend);
                setCode(codeToSend);
              }}
            />
          </Box>
          <Box flex={0.1} height="100%" bgColor="purple.900" color="white">
            <Flex p={2} bgColor="purple.800" justify="space-between">
              <Text fontSize="xs" fontWeight="bold">
                FORKS
              </Text>
              <Tooltip label="Create a fork">
                <Circle
                  border="1px solid"
                  borderColor="white"
                  _hover={{ backgroundColor: "purple.900", cursor: "pointer" }}
                  onClick={() => {

                  }}
                >
                  <Icon color="white" as={CgGitFork} />
                </Circle>
              </Tooltip>
            </Flex>
            {Object.keys(code).map((filename, index) => (
              <FileLabel
                key={index}
                filename={filename}
                isSelected={selectedFile === filename}
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ViewStream;
