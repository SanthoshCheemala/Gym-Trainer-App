import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer"
import ExerciseDetail from "./pages/ExerciseDetail"

function App() {
  return (
    <Box width={"400px"}sx={{width:{xl:'1488px'}}} m={"auto"} >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
