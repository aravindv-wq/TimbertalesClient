// // src/app/components/BookingPage/GuestDetails/GuestDetails.jsx
// "use client";

// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Card,
//   CardContent,
//   Tooltip,
//   IconButton,
// } from "@mui/material";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function GuestDetails() {
//   return (
//     <Card
//       elevation={2}
//       sx={{
//         mb: 3,
//         borderRadius: 3,
//         overflow: "hidden",
//       }}
//     >
//       <CardContent sx={{ p: { xs: 2, md: 3 } }}>
//         {/* Header (Title) */}
//         <Typography variant="h5" fontWeight={700} mb={2}>
//           Windchimes Duplex Villa
//         </Typography>

//         {/* Dates */}
//         <Grid container spacing={3} sx={{ mb: 1 }}>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="subtitle2" color="text.secondary">
//               Check In
//             </Typography>
//             <Typography fontWeight={700}>27 Oct 2025</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Typography variant="subtitle2" color="text.secondary">
//               Check Out
//             </Typography>
//             <Typography fontWeight={700}>28 Oct 2025</Typography>
//           </Grid>
//         </Grid>

//         {/* Guest details label */}
//         <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1, mb: 1 }}>
//           Guest Details <span style={{ color: "#d32f2f" }}>*</span>
//         </Typography>

//         {/* Form fields */}
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="First Name" />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Last Name" />
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Adult</InputLabel>
//               <Select
//                 label="Adult"
//                 defaultValue={1}
//                 IconComponent={ExpandMoreIcon}
//               >
//                 {[1, 2, 3, 4, 5].map((n) => (
//                   <MenuItem key={n} value={n}>
//                     {n}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Child</InputLabel>
//               <Select
//                 label="Child"
//                 defaultValue={0}
//                 IconComponent={ExpandMoreIcon}
//               >
//                 {[0, 1, 2, 3, 4].map((n) => (
//                   <MenuItem key={n} value={n}>
//                     {n}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <TextField fullWidth label="Special Request" />
//           </Grid>

//           <Grid item xs={12}>
//             <Box display="flex" gap={1} alignItems="center">
//               <FormControl fullWidth>
//                 <InputLabel>Estimated arrival time</InputLabel>
//                 <Select
//                   label="Estimated arrival time"
//                   defaultValue={"02:00 pm"}
//                   IconComponent={ExpandMoreIcon}
//                 >
//                   {[
//                     "12:00 pm",
//                     "01:00 pm",
//                     "02:00 pm",
//                     "03:00 pm",
//                     "04:00 pm",
//                     "05:00 pm",
//                   ].map((t) => (
//                     <MenuItem key={t} value={t}>
//                       {t}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <Tooltip title="Approximate time you plan to arrive">
//                 <IconButton size="small" sx={{ ml: 0.5 }}>
//                   <InfoOutlinedIcon fontSize="small" />
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function GuestDetails() {
  return (
    <Card
      elevation={2}
      sx={{
        mb: 3,
        borderRadius: 3,
        backgroundColor: "var(--CardBackgroundColor)",
        color: "var(--CardFontColor)",
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h5" fontWeight={700} mb={2} sx={{ color: "var(--SubTitleColor)" }}>
          Windchimes Duplex Villa
        </Typography>

        <Grid container spacing={3} sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Check In</Typography>
            <Typography fontWeight={700}>27 Oct 2025</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Check Out</Typography>
            <Typography fontWeight={700}>28 Oct 2025</Typography>
          </Grid>
        </Grid>

        <Typography variant="subtitle1" fontWeight={700} sx={{ mt: 1, mb: 1 }}>
          Guest Details <span style={{ color: "red" }}>*</span>
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              sx={textfieldStyle}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Last Name" sx={textfieldStyle} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Adult</InputLabel>
              <Select label="Adult" defaultValue={1} IconComponent={ExpandMoreIcon}>
                {[1, 2, 3, 4, 5].map((n) => <MenuItem key={n} value={n}>{n}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Child</InputLabel>
              <Select label="Child" defaultValue={0} IconComponent={ExpandMoreIcon}>
                {[0, 1, 2, 3, 4].map((n) => <MenuItem key={n} value={n}>{n}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Special Request" sx={textfieldStyle} />
          </Grid>

          <Grid item xs={12}>
            <Box display="flex" gap={1} alignItems="center">
              <FormControl fullWidth>
                <InputLabel>Estimated arrival time</InputLabel>
                <Select label="Estimated arrival time" defaultValue={"02:00 pm"} IconComponent={ExpandMoreIcon}>
                  {["12:00 pm", "01:00 pm", "02:00 pm", "03:00 pm"].map((t) => (
                    <MenuItem key={t} value={t}>{t}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Tooltip title="Approximate time you plan to arrive">
                <IconButton size="small">
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const textfieldStyle = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "var(--PrimaryColor)" },
    "&:hover fieldset": { borderColor: "var(--PrimaryColor)" },
    "&.Mui-focused fieldset": { borderColor: "var(--PrimaryColor)" },
  },
};
