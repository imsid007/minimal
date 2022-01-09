import {
  Button,
  Card,
  Drawer,
  Stack,
  Switch,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material';

import React from 'react';
import { RHFUploadSingleFile } from 'src/components/hook-form';
import { styled } from '@mui/material/styles';

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: any;
}
const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function CreateRoleDrawer({ isDrawerOpen, setIsDrawerOpen }: Props) {
  const options = ['Admin', 'Player', 'Admin', 'Player'];

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Card sx={{ width: '50vw', height: '100%', padding: '40px 20px' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Add Role</Typography>
          <div>
            <Switch />
          </div>
        </Stack>

        <Stack spacing={3}>
          <TextField
            select
            fullWidth
            label="Select"
            value="Player"
            // onChange={handleChangeCurrency}
            helperText="Please select your currency"
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField fullWidth multiline label="Multiline" />
          <TextField rows={5} fullWidth multiline label="Multiline" />

          <Stack direction="row" justifyContent="flex-end">
            <div>
              <Button color="inherit" variant="outlined" size="large">
                Cancel
              </Button>
              <Button sx={{ ml: 1 }} variant="contained" size="large">
                Add
              </Button>
            </div>
          </Stack>
        </Stack>
      </Card>
    </Drawer>
  );
}
