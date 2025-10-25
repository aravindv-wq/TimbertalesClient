// // src/app/components/BookingPage/ContactDetails/ContactDetails.jsx
// "use client";

// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Switch,
//   FormControlLabel,
//   Card,
//   CardContent,
//   InputAdornment,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from "@mui/material";

// export default function ContactDetails() {
//   return (
//     <Card elevation={2} sx={{ mb: 3, borderRadius: 3 }}>
//       <CardContent sx={{ p: { xs: 2, md: 3 } }}>
//         <Typography variant="h6" fontWeight={700} mb={1.5}>
//           Contact Details
//         </Typography>

//         <FormControlLabel
//           control={<Switch />}
//           label="I am booking for someone else"
//           sx={{ mb: 1.5 }}
//         />

//         <Grid container spacing={2}>
//           {/* Country code + contact */}
//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Country code</InputLabel>
//               <Select label="Country code" defaultValue="+91">
//                 <MenuItem value="+91">🇮🇳 +91</MenuItem>
//                 <MenuItem value="+1">🇺🇸 +1</MenuItem>
//                 <MenuItem value="+44">🇬🇧 +44</MenuItem>
//                 <MenuItem value="+61">🇦🇺 +61</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Contact no"
//               inputMode="tel"
//               placeholder="9876543210"
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="Email"
//               type="email"
//               placeholder="example@email.com"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">@</InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField fullWidth label="GST No" placeholder="Optional" />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import {
  Grid,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  Card,
  CardContent,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function ContactDetails() {
  return (
    <Card elevation={2} sx={{ mb: 3, borderRadius: 3, background: "var(--CardBackgroundColor)", color: "var(--CardFontColor)" }}>
      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
        <Typography variant="h6" fontWeight={700} mb={1.5} sx={{ color: "var(--SubTitleColor)" }}>
          Contact Details
        </Typography>

        <FormControlLabel control={<Switch />} label="I am booking for someone else" sx={{ mb: 1.5 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Country code</InputLabel>
              <Select label="Country code" defaultValue="+91">
                <MenuItem value="+91">🇮🇳 +91</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Contact no" sx={textfieldStyle} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Email" sx={textfieldStyle} InputProps={{ endAdornment: <InputAdornment position="end">@</InputAdornment> }} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="GST No" sx={textfieldStyle} placeholder="Optional" />
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
