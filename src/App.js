import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import { Box, Container } from "@mui/material";
function App() {
  return (
    <>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/" exact element={<Settings />} />
            <Route path="/questions" exact element={<Questions />} />
            <Route path="/score" exact element={<FinalScreen />} />
          </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
