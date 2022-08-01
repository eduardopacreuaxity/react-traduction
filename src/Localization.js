import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';
import { withTranslation } from 'react-i18next';

function Localization(props) {
  const tableLocations = { esES: locales.esES, enUS: locales.enUS }
  const handleChange = (language) => {
    props.setLocale(language);
    props.i18n.changeLanguage(language);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <p>{props.t('location')}</p>
      <Autocomplete
        options={Object.keys(tableLocations)}
        getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
        style={{ width: 300 }}
        value={props.locale}
        disableClearable
        onChange={(event, newValue) => {
          handleChange(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label={props.t('location')} fullWidth />
        )}
      />
      <TablePagination
        count={Object.keys(tableLocations).length}
        rowsPerPage={10}
        page={0}
        component="div"
        onPageChange={() => {}}
      />
    </Box>
  );
}

export default withTranslation() (Localization);
