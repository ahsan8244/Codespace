import { useState, useRef, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import FileLabel from "../Components/FileLabel";
import { io } from "socket.io-client";

const defaultCode = {
  "index.html": "<html></html>",
  "index.css": "",
  "index.js": "",
};

const Stream = () => {
  const [code, setCode] = useState(defaultCode);
  const [selectedFile, setSelectedFile] = useState(Object.keys(code)[0]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    socket.current.on("connect", () => {
      socket.current.emit("start_stream", "33944");
    });
  }, []);

  return (
    <Flex alignItems="stretch" height="100%">
      <Box flex={1}>
        <Flex bgColor="red" height="100%">
          <Box flex={0.1} height="100%" bgColor="#0d0d0d" color="white">
            <Box p={1} bgColor="#363636" mb={2}>
              <Text fontSize="xs" fontWeight="bold">
                FILES
              </Text>
            </Box>
            {Object.keys(code).map((filename, index) => (
              <FileLabel
                key={index}
                filename={filename}
                onSelect={() => setSelectedFile(filename)}
                isSelected={selectedFile === filename}
              />
            ))}
          </Box>
          <Box style={{ flex: 0.9 }}>
            <Editor
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
        </Flex>
      </Box>
    </Flex>
  );
};

export default Stream;
