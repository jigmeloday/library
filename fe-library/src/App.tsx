import React from 'react';
import CoreRoute from './app/route/core-route/core-route';
import { PaletteMode, ThemeProvider } from '@mui/material';
import { theme } from './assest/theme';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from './app/services/states/shared-state/shared.slice';

function App() {
  const currentTheme = useSelector(selectCurrentTheme);
  return (
    <ThemeProvider theme={theme(currentTheme as PaletteMode)}>
      <CoreRoute />
    </ThemeProvider>
  );
}

export default App;
