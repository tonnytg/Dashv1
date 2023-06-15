import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { InputBase } from '@mui/material';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="name-required"
          label="Name"
        />
        <br/>
        <TextField
        required
          id="email-required"
          label="Email"
          type="email"
        /><br/>
        <TextField id="outlined-search" label="Search field" type="search" />
        <br/>
        <InputBase type="file"/>
      </div>
        <div>
            <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
        Send
        </Button>
        </Stack>
        </div>


    </Box>
  );
}