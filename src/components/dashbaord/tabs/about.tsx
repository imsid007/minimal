import { Card, Stack, Button, Typography } from '@mui/material';
import React from 'react';
import TextIconLabel from 'src/components/TextIconLabel';

export default function About() {
  return (
    <Card>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          style={{ marginTop: '20px' }}
          variant="contained"
          target="_blank"
          rel="noopener"
          href="https://material-ui.com/store/items/minimal-dashboard/"
        >
          Follow
        </Button>
        <div>
          <TextIconLabel
            sx={{ ml: 2 }}
            icon={<Typography variant="h5">21</Typography>}
            value={
              <Typography variant="body1" sx={{ color: 'text.secondary', ml: 1 }}>
                {' '}
                Common in the both
              </Typography>
            }
          />
        </div>
      </Stack>
    </Card>
  );
}
