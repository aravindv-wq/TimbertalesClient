"use client";
import { Box } from "@mui/material";
import GuestDetails from "../GuestDetails/GuestDetails.jsx";
import ContactDetails from "../ContactDetails/ContactDetails.jsx";

export default function LeftPane() {
  return (
    <Box>
      <GuestDetails />
      <ContactDetails />
    </Box>
  );
}
