import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router";
import Home from "./Screens/Home";
import Resume from "./Screens/Resume";
import AboutMe from "./Screens/AboutMe";
import Footer from "./Components/Footer";
import "./App.css";
import { CssBaseline, createTheme, ThemeProvider, Box } from "@mui/material";
import { grey } from "@mui/material/colors";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: grey[500],
      },
      secondary: {
        main: "#000000",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: grey[900],
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box className="App">
        <Header onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About me" element={<AboutMe />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
