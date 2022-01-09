import { Button, Card, Drawer, Stack, Switch, TextField, Typography } from '@mui/material';

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

export default function CreateResourceDrawer({ isDrawerOpen, setIsDrawerOpen }: Props) {
  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Card sx={{ width: '50vw', height: '100%', overflow: 'scroll', padding: '40px 20px' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Create Resource</Typography>
        </Stack>

        <Stack spacing={3}>
          <TextField fullWidth multiline label="Resource name" />
          <TextField fullWidth multiline label="Nick Name" />
          <TextField fullWidth multiline label="Registration number" />
          <TextField fullWidth multiline label="Km dirven" />

          <div>
            <LabelStyle>Cover</LabelStyle>
            <RHFUploadSingleFile name="cover" accept="image/*" maxSize={3145728} />
          </div>
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
