import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Features/Home";
import Stream from "./Features/Stream";
import "./index.css";
import { Flex, Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex
        flexDirection="column"
        height="100%"
      >
        <Header style={{ flex: 0.02 }} />
        <Box
          flex={0.98}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/start-stream/:id">
              <Stream />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
