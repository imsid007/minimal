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

export default function CreateChannelDrawer({ isDrawerOpen, setIsDrawerOpen }: Props) {
  const options = ['Select the event or news', 'Player', 'Admin', 'Player'];

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Card sx={{ width: '50vw', height: '100%', padding: '40px 20px' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Create Channel</Typography>
        </Stack>

        <Stack spacing={3}>
          <TextField fullWidth multiline label="Channel NameMultiline" />
          <TextField fullWidth multiline label="Purpose" />

          <TextField
            select
            fullWidth
            label="Select"
            value="Player"
            // onChange={handleChangeCurrency}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Select"
            value="Player"
            // onChange={handleChangeCurrency}
          >
            <MenuItem>Select Members</MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Stack direction="row" justifyContent="flex-end">
            <div>
              <Button color="inherit" variant="outlined" size="large">
                Cancel
              </Button>
              <Button sx={{ ml: 1 }} variant="contained" size="large">
                Create
              </Button>
            </div>
          </Stack>
        </Stack>
      </Card>
    </Drawer>
  );
}
