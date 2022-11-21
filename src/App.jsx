import { Route, Routes } from "react-router-dom";
import { MainWindow } from "./containers/MainWindow";
import { HostScreen } from "./containers/HostScreen";
import { SpectatorsWindow } from "./containers/SpectatorsWindow";
// import { SpectatorsWelcome, SpectatorsStart, SpectatorsQuestion, SpectatorsEndRound, SpectatorsGameOver } from "./containers/Spectators";
import { Box } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/chakra-theme";
import { Provider } from "react-redux";
import { store } from "./store";
import { GameWrapperContainer } from "./containers/GameWrapperContainer";
// import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Box className="main-frame">
            <Box className="main-frame__work-area">
              <Routes>
                <Route path="/" element={<MainWindow />} />
                {/*<Route path="/editor" element={null}>*/}
                {/*  <Route path="/start" element={null} />*/}
                {/*  <Route path="/launch" element={null} />*/}
                {/*</Route>*/}
                <Route path="/host/*" element={<HostScreen />} />
                <Route path="/spectators" element={<SpectatorsWindow />} />
                {/*  */}
                {/*<Route path="/spectators/welcome" element={<SpectatorsWelcome />} />*/}
                {/*<Route path="/spectators/start" element={<SpectatorsStart />} />*/}
                {/*<Route path="/spectators/question" element={<SpectatorsQuestion />} />*/}
                {/*<Route path="/spectators/end-round" element={<SpectatorsEndRound />} />*/}
                {/*<Route path="/spectators/game-over" element={<SpectatorsGameOver />} />*/}
                <Route path="game/*" element={<GameWrapperContainer />} />
              </Routes>
            </Box>
          </Box>
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
