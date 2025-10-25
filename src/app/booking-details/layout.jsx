"use client";
import { CssBaseline, Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", background: "#F5EDE6" }}>
      <CssBaseline />
      {children}
    </Box>
  );
}

