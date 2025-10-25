"use client";

import { Container, Box } from "@mui/material";
import LeftPane from "../../components/BookingPage/LeftPane/LeftPane.jsx";
import BookingDetails from "../../components/BookingPage/BookingDetails/BookingDetails.jsx";

export default function BookingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "flex-start",
          flexWrap: { xs: "wrap", md: "nowrap" }, // mobile stack, desktop side-by-side
        }}
      >
        {/* LEFT SIDE - Scrolls normally */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 70%" },
          }}
        >
          <LeftPane />
        </Box>

        {/* RIGHT SIDE - Sticky */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 30%" },
            position: { md: "sticky" },
            top: { md: 30 },
          }}
        >
          <BookingDetails />
        </Box>
      </Box>
    </Container>
  );
}
