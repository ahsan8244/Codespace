import { useState, useRef, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  IconButton,
  Circle,
  Tooltip,
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  Button,
} from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import FileLabel from "../Components/FileLabel";
import { io } from "socket.io-client";
import { CgGitFork } from "react-icons/cg";
import { MdFiberManualRecord } from "react-icons/md";
import Draggable from "react-draggable";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { AiOutlineDrag } from "react-icons/ai";

const ViewStream = () => {
  const { id, youtubeLiveId } = useParams();

  const [code, setCode] = useState("");
  const [viewerSelectedFile, setViewerSelectedFile] = useState("");
  const [streamerSelectedFile, setStreamerSelectedFile] = useState("");
  const [forks, setForks] = useState({});
  const [latestForkId, setLatestForkId] = useState(0);
  const [selectedFork, setSelectedFork] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [chats, setChats] = useState([]);


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
      socket.current.emit("join_stream", id);
    });

    socket.current.on("read_code", (codeReceived) => {
      setCode(codeReceived);
    });

    socket.current.on("read_message", message => {
      setChats(oldChats => {
        return [...oldChats, message];
      });
    })

    socket.current.on("current_file_change", (filename) => {
      setStreamerSelectedFile(filename);
    });
  }, []);

  return (
    <>
      <Draggable style={{ position: "relative" }} bounds="parent">
        <div
          style={{
            backgroundColor: "white",
            zIndex: 30,
            position: "absolute",
            right: 10,
            bottom: 10,
          }}
        >
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Chat</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <iframe
                  srcDoc={
                    selectedFork
                      ? forks[selectedFork]["index.html"]
                      : code["index.html"]
                  }
                  style={{
                    backgroundColor: "white",
                    zIndex: 30,
                    pointerEvents: "none",
                  }}
                  width="300px"
                  height="250px"
                />
              </TabPanel>
              <TabPanel>
                <Box w="300px" h="250px" bgColor="white" p={0}>
                  <Flex align="center" mb={2}>
                    <Input
                      placeholder="Type message"
                      value={currentMessage}
                      mr={2}
                      onChange={(e) => {
                        setCurrentMessage(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        socket.current.emit("chat_message", {
                          streamId: id,
                          message: currentMessage,
                        });
                        setChats((oldChats) => {
                          return [...oldChats, currentMessage];
                        });
                        setCurrentMessage("");
                      }}
                      colorScheme="purple"
                    >
                      Send
                    </Button>
                  </Flex>
                  <Box overflow="scroll" pointerEvents="all">
                    {chats.map((chatMessage) => (
                      <Text mb={2}>{`${chatMessage} - Guest`}</Text>
                    ))}
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </Draggable>
      <Draggable style={{ position: "relative" }} bounds="parent">
        <div
          style={{
            backgroundColor: "white",
            zIndex: 30,
            position: "absolute",
            bottom: 10,
            left: 10,
          }}
        >
          <Flex p={2} bgColor="purple.500">
            <Icon as={AiOutlineDrag} color="white" />
          </Flex>
          <YouTube
            videoId={youtubeLiveId}
            opts={{
              height: "190",
              width: "320",
              playerVars: {
                autoplay: 1,
              },
            }}
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
                  onSelect={() => setViewerSelectedFile(filename)}
                  isSelected={viewerSelectedFile === filename}
                  avatar={
                    streamerSelectedFile === filename && (
                      <Avatar
                        size="xs"
                        name="Dan Abrahmov"
                        src="https://picsum.photos/200/300"
                      />
                    )
                  }
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
                    ? forks[selectedFork][viewerSelectedFile]
                    : code[viewerSelectedFile]
                }
                onChange={(updatedCode) => {
                  const newCodeForFork = {
                    ...forks[selectedFork],
                    [viewerSelectedFile]: updatedCode,
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
