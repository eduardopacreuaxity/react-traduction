import './App.css';
import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import * as locales from '@mui/material/locale';
import Localization from './Localization';
import Translate from './Translate';
import i18next from './i18n';

function App() {
  const [locale, setLocale] = React.useState(i18next.language);

  const theme = useTheme();

  const themeWithLocale = React.useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme],
  );

  const themeTest = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    locales[locale],
  );

  return (
    <ThemeProvider theme={themeTest}>
      <Localization locale={locale} setLocale={setLocale}/>
      <Translate setLocale={setLocale}/>
    </ThemeProvider>
  );
}

export default App;
