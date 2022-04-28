import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FormCompose from './composer/FormCompose';
import { FormBuilder, FormGroup, Validators } from 'react-reactive-form';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import OutlinedCard from './composer/OutlinedCard';
import {Main} from './composer/Main';
import { getDesignTokens } from './Theme/theme';
import { Counter } from './composer/components/Counter';
import { Application } from './composer/components/Application';
import { Header } from './composer/components/Header';

function App() {
  Main();
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const colorMode = React.useMemo(() => () => setMode((prevMode: PaletteMode) => prevMode === 'light' ? 'dark' : 'light'),[]);
  
  const loginForm: FormGroup = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(3)]],
    email: ["", [Validators.email, Validators.required]],
  });



  const card = <OutlinedCard title="Login" subtitle={`Welcome to ${'Composer'}`} ><FormCompose test={''} loginForm={loginForm} /> </OutlinedCard>;
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {Main()}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
