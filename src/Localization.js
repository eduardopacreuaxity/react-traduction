import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as locales from '@mui/material/locale';

function Localization(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Autocomplete
        options={Object.keys(locales)}
        getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
        style={{ width: 300 }}
        value={props.locale}
        disableClearable
        onChange={(event, newValue) => {
          props.setLocale(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Locale" fullWidth />
        )}
      />
      <TablePagination
        count={2000}
        rowsPerPage={10}
        page={1}
        component="div"
        onPageChange={() => {}}
      />
    </Box>
  );
}

export default Localization;
