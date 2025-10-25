// "use client";
// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Divider,
//   Button,
//   Collapse,
//   Link,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// export default function BookingDetails() {
//   const [showTaxes, setShowTaxes] = React.useState(false);

//   return (
//     <Card
//       elevation={3}
//       sx={{
//         borderRadius: 3,
//         position: "sticky",
//         top: 30,
//         zIndex: 20,
//       }}
//     >
//       <CardContent sx={{ p: { xs: 2, md: 3 } }}>
//         <Typography variant="h6" fontWeight={700} mb={2}>
//           Booking Details
//         </Typography>

//         <Typography fontWeight={600} mb={1}>
//           Windchimes Duplex Villa
//         </Typography>

//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           mb={2}
//         >
//           <Link href="#" underline="hover">
//             Welcome aboard package
//           </Link>
//           <IconButton color="inherit" size="small">
//             <DeleteOutlineIcon fontSize="small" />
//           </IconButton>
//         </Box>

//         <Box
//           sx={{
//             border: "1px solid",
//             borderColor: "divider",
//             borderRadius: 2,
//             p: 2,
//             mb: 2,
//           }}
//         >
//           <Box mb={1.5}>
//             <Typography variant="body2" color="text.secondary">
//               Check In
//             </Typography>
//             <Typography fontWeight={700}>27 Oct 2025</Typography>
//           </Box>

//           <Box mb={1.5}>
//             <Typography variant="body2" color="text.secondary">
//               Check Out
//             </Typography>
//             <Typography fontWeight={700}>28 Oct 2025</Typography>
//           </Box>

//           <Box display="flex" alignItems="center" gap={1}>
//             <Typography variant="body2" color="text.secondary">
//               Guests
//             </Typography>
//             <Typography fontWeight={700}>1</Typography>
//             <Box flexGrow={1} />
//             <Typography fontWeight={700}>INR 40,000</Typography>
//           </Box>
//         </Box>

//         <Box
//           display="flex"
//           alignItems="center"
//           gap={1}
//           sx={{ cursor: "pointer", userSelect: "none" }}
//           onClick={() => setShowTaxes((s) => !s)}
//           mb={1}
//         >
//           <Typography>Taxes</Typography>
//           <ExpandMoreIcon
//             sx={{
//               transform: showTaxes ? "rotate(180deg)" : "rotate(0deg)",
//               transition: "transform .2s",
//             }}
//             fontSize="small"
//           />
//           <Box flexGrow={1} />
//           <Typography color="text.secondary">INR 7,200</Typography>
//         </Box>

//         <Collapse in={showTaxes}>
//           <Box sx={{ pl: 1, pb: 1 }}>
//             <Typography variant="body2" color="text.secondary">
//               ( Price breakdown )
//             </Typography>
//           </Box>
//         </Collapse>

//         <Divider sx={{ my: 1.5 }} />

//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography fontWeight={700}>Total</Typography>
//           <Typography fontWeight={700}>INR 47,200</Typography>
//         </Box>

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             py: 1.4,
//             fontWeight: 700,
//             textTransform: "none",
//             backgroundColor: "#C26A5C",
//             "&:hover": { backgroundColor: "#A85B4F" },
//             borderRadius: 2,
//           }}
//         >
//           Pay Now
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }


// "use client";
// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Divider,
//   Button,
//   Collapse,
//   Link,
//   Checkbox,
//   FormControlLabel,
//   IconButton,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// export default function BookingDetails() {
//   const [showTaxes, setShowTaxes] = React.useState(false);

//   return (
//     <Card elevation={3} sx={{ borderRadius: 3 }}>
//       <CardContent sx={{ p: { xs: 2, md: 3 } }}>
//         <Typography variant="h6" fontWeight={700} mb={2}>
//           Booking Details
//         </Typography>

//         <Typography fontWeight={600} mb={1}>
//           Windchimes Duplex Villa
//         </Typography>

//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//           <Link href="#" underline="hover">Welcome aboard package</Link>
//           <IconButton size="small"><DeleteOutlineIcon fontSize="small" /></IconButton>
//         </Box>

//         <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mb: 2 }}>
//           <Typography variant="body2" color="text.secondary">Check In</Typography>
//           <Typography fontWeight={700}>27 Oct 2025</Typography>

//           <Typography variant="body2" color="text.secondary" mt={2}>Check Out</Typography>
//           <Typography fontWeight={700}>28 Oct 2025</Typography>

//           <Box display="flex" alignItems="center" gap={1} mt={2}>
//             <Typography variant="body2" color="text.secondary">Guests</Typography>
//             <Typography fontWeight={700}>1</Typography>
//             <Box flexGrow={1} />
//             <Typography fontWeight={700}>INR 40,000</Typography>
//           </Box>
//         </Box>

//         <Box
//           display="flex"
//           alignItems="center"
//           gap={1}
//           sx={{ cursor: "pointer" }}
//           onClick={() => setShowTaxes(s => !s)}
//           mb={1}
//         >
//           <Typography>Taxes</Typography>
//           <ExpandMoreIcon
//             sx={{ transform: showTaxes ? "rotate(180deg)" : "rotate(0deg)" }}
//             fontSize="small"
//           />
//           <Box flexGrow={1} />
//           <Typography color="text.secondary">INR 7,200</Typography>
//         </Box>

//         <Collapse in={showTaxes}>
//           <Typography variant="body2" color="text.secondary" pl={1}>Price Breakdown</Typography>
//         </Collapse>

//         <Divider sx={{ my: 2 }} />

//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Typography fontWeight={700}>Total</Typography>
//           <Typography fontWeight={700}>INR 47,200</Typography>
//         </Box>

//         <Button fullWidth variant="contained" sx={{ background: "#C26A5C", "&:hover": { background: "#B0584D" } }}>
//           Pay Now
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }


"use client";
import React from "react";
import {
  Box, Typography, Card, CardContent, Divider, Button, Collapse, Link, IconButton
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function BookingDetails() {
  const [showTaxes, setShowTaxes] = React.useState(false);

  return (
    <Card elevation={3} sx={{ borderRadius: 3, background: "var(--CardBackgroundColor)", color: "var(--CardFontColor)" }}>
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h6" fontWeight={700} mb={2} sx={{ color: "var(--SubTitleColor)" }}>
          Booking Details
        </Typography>

        <Typography fontWeight={600} mb={1}>Windchimes Duplex Villa</Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Link href="#" underline="hover" sx={{ color: "var(--HyperLinkColor)" }}>Welcome aboard package</Link>
          <IconButton size="small"><DeleteOutlineIcon fontSize="small" /></IconButton>
        </Box>

        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mb: 2 }}>
          <Typography variant="body2">Check In</Typography>
          <Typography fontWeight={700}>27 Oct 2025</Typography>

          <Typography variant="body2" mt={2}>Check Out</Typography>
          <Typography fontWeight={700}>28 Oct 2025</Typography>

          <Box display="flex" alignItems="center" gap={1} mt={2}>
            <Typography variant="body2">Guests</Typography>
            <Typography fontWeight={700}>1</Typography>
            <Box flexGrow={1} />
            <Typography fontWeight={700}>INR 40,000</Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" gap={1} sx={{ cursor: "pointer" }} onClick={() => setShowTaxes((s) => !s)} mb={1}>
          <Typography>Taxes</Typography>
          <ExpandMoreIcon sx={{ transform: showTaxes ? "rotate(180deg)" : "rotate(0deg)" }} fontSize="small" />
          <Box flexGrow={1} />
          <Typography>INR 7,200</Typography>
        </Box>

        <Collapse in={showTaxes}>
          <Typography variant="body2" pl={1}>Price Breakdown</Typography>
        </Collapse>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={700}>Total</Typography>
          <Typography fontWeight={700}>INR 47,200</Typography>
        </Box>

        <Button fullWidth variant="contained" sx={{
          background: "var(--PrimaryColor)",
          color: "#fff",
          textTransform: "none",
          py: 1.3,
          "&:hover": { background: "#b06859" },
          borderRadius: 2,
        }}>
          Pay Now
        </Button>
      </CardContent>
    </Card>
  );
}
