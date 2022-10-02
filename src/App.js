import { createTheme, ThemeProvider } from "@mui/material";
import { Box, fontSize, Stack } from "@mui/system";
import { useState } from "react";

import "./App.css";
import AddPost from "./components/AddPost";
import Leftbar from "./components/Leftbar";
import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// //costum style button
// const CustomButton = styled(Button)({
//   backgroundColor: "black",
//   color: "white",
//   padding: "10px 20px",
//   fontSize: "25px",
//   border: "none",
//   borderRadius: "5px",
//   "&:hover": {
//     backgroundColor: "white",
//     color: "black",
//     border: "2px solid black",
//   },
// });

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const HandleDarkMode = () => {
    const currentMode = mode === "light" ? "dark" : "light";
    setMode(currentMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="app" bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={{ sm: 2, xs: 0 }}>
          <Sidebar HandleDarkMode={HandleDarkMode} />
          <Mainbar />
          <Leftbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
