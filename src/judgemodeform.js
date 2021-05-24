import { Typography, ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
      subtitle1: {
        fontSize: 20,
        color: 'red'
      },
    },
    palette: {
      primary: {
        main: '#3f51b5'
      },
      secondary: {
        main: '#0288d1'
      }
    },
  });

export default function JudgeModeForm(props) {
    return (
        <ThemeProvider theme={theme}>      
            <Typography variant="subtitle1">Hello {props.userName}!!!</Typography>
        </ThemeProvider>
    );
}