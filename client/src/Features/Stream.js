import { useState, useRef, useEffect } from "react";
import { Box, Flex, Icon, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Input, Button } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import FileLabel from "../Components/FileLabel";
import { io } from "socket.io-client";
import Draggable from "react-draggable";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {AiOutlineDrag} from "react-icons/ai";

const defaultCode = {
  "index.html": "<html></html>",
  "index.css": "",
  "index.js": "",
};

const Stream = () => {
  const { id, youtubeLiveId } = useParams();

  const [code, setCode] = useState(defaultCode);
  const [selectedFile, setSelectedFile] = useState();
  const [chats, setChats] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://codespace-server.herokuapp.com/");

    socket.current.on("connect", () => {
      socket.current.emit("start_stream", id);
    });

    socket.current.on("read_message", message => {
      setChats((oldChats) => {
        return [...oldChats, message];
      });
    })

    setSelectedFile(Object.keys(code)[0]);
  }, []);

  useEffect(() => {
    socket.current.emit("change_file", selectedFile);
  }, [selectedFile]);

  return (
    <>
      <Draggable style={{ position: "relative" }} bounds="parent">
        <div
          style={{ position: "absolute", right: 10, bottom: 10, zIndex: 30, backgroundColor: "white" }}
        >
          <Tabs>
            <TabList>
              <Tab>Preview</Tab>
              <Tab>Chat</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <iframe
                  srcDoc={code["index.html"]}
                  style={{ backgroundColor: "white", zIndex: 30, pointerEvents: "none" }}
                  width="300px"
                  height="250px"
                />
              </TabPanel>
              <TabPanel>
                <Box w="300px" h="250px" bgColor="white" p={0}>
                  <Box overflow="scroll">
                    {chats.map((chatMessage, index) => (
                      <Text key={index} mb={2}>{`${chatMessage} - Guest`}</Text>
                    ))}
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
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
              <Box p={1} bgColor="purple.800">
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
                  socket.current.emit("change_file", selectedFile);
                  setCode(codeToSend);
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Stream;
