import { createTheme } from "@material-ui/core";

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
    },
});
