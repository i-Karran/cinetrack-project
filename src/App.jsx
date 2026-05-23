import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/homepage"; // Check your filename casing!
import Watchlist from "./pages/watchList";
import MovieDetails from "./pages/movieDetails";
import Login from "./pages/login";
import ProtectedRoute from "./components/protectedRoute"

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Simple Navbar */}
        <nav
          style={{
            padding: "1rem",
            background: "#1a1a1a",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/watchlist"
            style={{ color: "white", textDecoration: "none" }}
          >
            My Watchlist
          </Link>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* We will create the Watchlist page next */}
          <Route
            path="/watchlist"
            element={
              <ProtectedRoute>
                <Watchlist />
              </ProtectedRoute>
            }
          />
          {/* The colon (:) makes "id" a variable */}
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
