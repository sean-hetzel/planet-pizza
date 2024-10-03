import "./App.css";
import { Box, CssVarsProvider, extendTheme } from "@mui/joy";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";
import Header from "./components/Header";
import useIsMobile from "./utils/useIsMobile";

// Extend the theme and set the default mode to dark
const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: "#121212", // Example of setting the background color in dark mode
        },
      },
    },
  },
});

function App() {
  const isMobile = useIsMobile();

  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <BrowserRouter>
        <Box sx={{ display: "flex", height: "100vh", bgcolor: "neutral.700" }}>
          {!isMobile && <Sidebar />}
          <Box sx={{ flex: 1, overflow: "auto" }}>
            <Header />
            <Box sx={{ p: 2 }}>
              <Routes>
                <Route path="/" element={<Navigate to="/inventory" />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/recipes" element={<Recipes />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;

// Pizza names:
// Jumbo Jupiter
// Spicy Venus
// Earthly Paradise

// Topping manager:
// Autocomplete for adding new ingredient
// +- buttons and text input for editing amount of ingredient

// Pizza manager:
// Big pizza image svg with ability to add ingredients to it and save as new recipe
// See and edit list of pizza recipes

// TODO:
// Accessibility

// https://github.com/StrongMind/culture/blob/main/recruit/full-stack-developer.md
