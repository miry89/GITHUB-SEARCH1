import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { observer } from 'mobx-react-lite';
import { PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';

const themeBase: ThemeOptions = {
  components: {
    MuiButton: { defaultProps: { variant: 'contained' } },
    MuiGrid: { defaultProps: { display: 'grid' } },
    MuiTextField: { defaultProps: { variant: 'outlined', size: 'small' } },
    MuiUseMediaQuery: { defaultProps: { noSsr: true } }
  },
  typography: { fontFamily: 'Roboto, sans-serif' }
};
export const LIGHT_THEME = createTheme({
  ...themeBase,
  palette: {
    mode: 'light',
    background: { default: '#f2f2f2' },
    primary: { main: '#1859BA' }
  }
});
export const ThemeWrapper = observer(function ({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
});
