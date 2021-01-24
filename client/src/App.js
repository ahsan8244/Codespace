import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Features/Home";
import Stream from "./Features/Stream";
import ViewStream from "./Features/ViewStream";
import GoLive from "./Features/GoLive";
import "./index.css";
import { Flex, Box } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Flex
        flexDirection="column"
        height="100%"
      >
        <Header style={{ flex: 0.03 }} />
        <Box
          flex={0.97}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/start-stream/:id">
              <Stream />
            </Route>
            <Route exact path="/view-stream/:id">
              <ViewStream />
            </Route>
            <Route exact path="/go-live">
              <GoLive />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
