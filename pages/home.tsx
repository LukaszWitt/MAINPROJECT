// import * as React from "react";
// import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import Navbar from "@/components/navbar";
// import { Slider } from "@mui/material";
// import karuzela from "@/components/karuzela";

// // Tworzenie motywu
// const theme = createTheme({
//   palette: {
//     mode: "light", // lub 'dark'
//   },
// });

// export default function MyApp() {
//   const [mode, setMode] = React.useState<PaletteMode>("light");

//   const handleModeChange = (
//     event: React.MouseEvent<HTMLElement>,
//     newMode: PaletteMode
//   ) => {
//     setMode(newMode);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh",
//         }}
//       >
//         <Navbar />

//         <Box
//           sx={{
//             background: "linear-gradient(380deg, #6B1B9A, #9B30FF)",
//             flexGrow: 1,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {/* <karuzela /> */}
//           {/* Twój zawartość */}
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }
