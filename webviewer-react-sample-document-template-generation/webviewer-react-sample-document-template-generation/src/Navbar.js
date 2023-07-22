import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const navbarStyles = {
    display: "flex",
    justifyContent: "space-between", // Align items to both ends
    alignItems: "center",
    padding: "20px",
    background: "#333",
    color: "#fff",
    width: "100%", // Set width to 100% to extend till both ends
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#fff",
    margin: "0 20px",
  };

  return (
    <nav style={navbarStyles}>
      <RouterLink to="/" style={linkStyles}>
        Home
      </RouterLink>
      <div>
        <RouterLink to="/search" style={linkStyles}>
          Search
        </RouterLink>
        <RouterLink to="/notes" style={linkStyles}>
          Notes
        </RouterLink>
        <RouterLink to="/document-generator" style={linkStyles}>
          Doc Generator
        </RouterLink>
      </div>
    </nav>
  );
};

export default Navbar;
