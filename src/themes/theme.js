import { createTheme } from "@material-ui/core";

//Theme for Material UI
export const theme = createTheme({
    spacing: 10,
    typography: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: 15,
        textAlign: 'left',
        button: {
            textTransform: "none",
            letterSpacing: 0,
            padding: 0
        },
    },
    palette: {
        primary: { main: '#3b53da' },
        secondary: { main: '#289cff' }
    },
});
