import React from 'react';
import CoreRoute from './app/route/core-route/core-route';
import { PaletteMode, ThemeProvider } from '@mui/material';
import { theme } from './assest/theme';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from './app/services/states/shared-state/shared.slice';
import { Toaster } from 'react-hot-toast';

function App() {
  const currentTheme = useSelector(selectCurrentTheme);
  return (
    <ThemeProvider theme={theme(currentTheme as PaletteMode)}>
        <Toaster gutter={24}
                 position='top-center'
                 toastOptions={{
                     style: {
                         padding: '12px',
                         background: theme('light').palette.black.contrastText,
                         color: theme('light').palette.white.main,
                     },
                 }}
        />
      <CoreRoute />
    </ThemeProvider>
  );
}

export default App;
