// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail"; // Import this
import About from "./pages/About";
import SubmitNews from "./pages/submitnews";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} /> {/* ✅ Route here */}
        <Route path="/about" element={<About />} />
        <Route path="/submit-news" element={<SubmitNews />} />
      </Routes>
    </Router>
  );
}
