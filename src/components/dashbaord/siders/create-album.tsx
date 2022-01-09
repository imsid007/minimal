import { Card, Drawer, Stack, Button, Typography } from '@mui/material';

import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import LightboxModal from 'src/components/LightboxModal';
import MediaCard from '../media-card';

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: any;
}
const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function CreateAlbumDrawer({ isDrawerOpen, setIsDrawerOpen }: Props) {
  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Card sx={{ width: '50vw', height: '100%', overflow: 'scroll', padding: '40px 20px' }}>
        <MediaCard cardHeader="CreateAlbum" />
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
      </Card>
    </Drawer>
  );
}
