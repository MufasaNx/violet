import { createTheme } from "@mui/material/styles";
import Button from "./Overrides/Button";
import Card from "./Overrides/Card";
import Paper from "./Overrides/Paper";
import TextField from "./Overrides/TextField";
import palette from "./palette";

// Create a theme instance.
const theme = createTheme({
  palette,
  typography: {
    fontFamily: [
      "Work Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    ...Card,
    ...Button,
    ...TextField,
    ...Paper,
  } as any,
});

export default theme;
