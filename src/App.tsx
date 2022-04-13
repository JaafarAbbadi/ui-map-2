import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCompose from './composer/FormCompose';
import { FormBuilder, FormGroup, Validators } from 'react-reactive-form';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import OutlinedCard from './composer/OutlinedCard';
import {Main} from './composer/Main';



function App() {
  Main();
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
//      ...(mode === 'light'
//        ? {
//            // palette values for light mode
//            primary: amber,
//            divider: amber[200],
//            text: {
//              primary: grey[900],
//              secondary: grey[800],
//            },
//          }
//        : {
//            // palette values for dark mode
//            primary: deepOrange,
//            divider: deepOrange[700],
//            background: {
//              default: deepOrange[900],
//              paper: deepOrange[900],
//            },
//            text: {
//              primary: '#fff',
//              secondary: grey[500],
//            },
//          }),
    },
  });
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]); 
  const loginForm: FormGroup = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.email, Validators.required]],
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <OutlinedCard title="Login" subtitle={`Welcome to ${'Composer'}`} ><FormCompose test={''} loginForm={loginForm} /> </OutlinedCard>
          </header>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
