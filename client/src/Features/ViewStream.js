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
import { MdFiberManualRecord } from "react-icons/md";
import Draggable from "react-draggable";

const ViewStream = () => {
  const [code, setCode] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [forks, setForks] = useState({});
  const [latestForkId, setLatestForkId] = useState(0);
  const [selectedFork, setSelectedFork] = useState("");

  const socket = useRef();

  const createFork = () => {
    const newForkId = latestForkId + 1;
    const newForkName = `Fork #${newForkId}`;
    setForks({
      ...forks,
      [newForkName]: code,
    });
    setSelectedFork(newForkName);
    setLatestForkId(newForkId);
  };

  useEffect(() => {
    socket.current = io("https://codespace-server.herokuapp.com/");

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
    <>
      <Draggable
        style={{ position: "relative" }}
      >
        <div style={{ backgroundColor: "white", zIndex: 30, position: "absolute"  }}>
          <iframe
            srcDoc={selectedFork ? forks[selectedFork]["index.html"] : code["index.html"]}
            style={{ backgroundColor: "white", zIndex: 30, pointerEvents: "none" }}
            width="300px"
            height="250px"
          />
        </div>
      </Draggable>
      <Flex alignItems="stretch" height="100%">
        <Box flex={1}>
          <Flex height="100%">
            <Box
              flex={0.1}
              height="100%"
              bgColor="purple.900"
              color="white"
              boxShadow="rgba(0, 0, 0, 0.3) -4px 0px 10px inset"
            >
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
                options={{ readOnly: selectedFork ? false : true }}
                defaultLanguage="html"
                theme="vs-dark"
                value={
                  selectedFork
                    ? forks[selectedFork][selectedFile]
                    : code[selectedFile]
                }
                onChange={(updatedCode) => {
                  const newCodeForFork = {
                    ...forks[selectedFork],
                    [selectedFile]: updatedCode,
                  };
                  setForks({
                    ...forks,
                    [selectedFork]: newCodeForFork,
                  });
                }}
              />
            </Box>
            <Box
              flex={0.1}
              height="100%"
              bgColor="purple.900"
              color="white"
              boxShadow="rgba(0, 0, 0, 0.3) 4px 0px 10px inset"
            >
              <Flex p={2} bgColor="purple.800" justify="space-between">
                <Text fontSize="xs" fontWeight="bold">
                  FORKS
                </Text>
                {!selectedFork ? (
                  <Tooltip label="Create a fork">
                    <Circle
                      border="1px solid"
                      borderColor="white"
                      _hover={{
                        backgroundColor: "purple.900",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        createFork();
                      }}
                    >
                      <Icon color="white" as={CgGitFork} />
                    </Circle>
                  </Tooltip>
                ) : (
                  <Tooltip label="Resume live">
                    <Circle
                      border="1px solid"
                      borderColor="white"
                      _hover={{
                        backgroundColor: "purple.900",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedFork("");
                      }}
                    >
                      <Icon color="red.500" as={MdFiberManualRecord} />
                    </Circle>
                  </Tooltip>
                )}
              </Flex>
              {Object.keys(forks).map((forkname, index) => (
                <FileLabel
                  key={index}
                  filename={forkname}
                  isSelected={selectedFork === forkname}
                  onSelect={() => setSelectedFork(forkname)}
                />
              ))}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ViewStream;
