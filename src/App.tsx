import "./App.css";
import { Box } from "@mui/joy";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/recipes" />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </Box>
    </BrowserRouter>
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
