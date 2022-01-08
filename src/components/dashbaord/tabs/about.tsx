import {
  Card,
  Stack,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
} from '@mui/material';

import React from 'react';
import Page from 'src/components/Page';
import TextIconLabel from 'src/components/TextIconLabel';
import Iconify from 'src/components/Iconify';

const about = [1, 2, 3];
export default function About() {
  return (
    <div>
      <Card style={{ padding: ' 20px' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button
            variant="contained"
            target="_blank"
            rel="noopener"
            href="https://material-ui.com/store/items/minimal-dashboard/"
          >
            Follow
          </Button>
          <div>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
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
              <TextIconLabel
                sx={{ ml: 2 }}
                icon={<Typography variant="h5">48</Typography>}
                value={
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 1 }}>
                    {' '}
                    Clubs
                  </Typography>
                }
              />
              <TextIconLabel
                sx={{ ml: 2 }}
                icon={<Typography variant="h5">30</Typography>}
                value={
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 1 }}>
                    {' '}
                    Events
                  </Typography>
                }
              />
            </Stack>
          </div>
        </Stack>
        <Divider />
        <Grid container style={{ marginTop: '20px' }}>
          <Grid item xs={3} style={{ padding: '10px' }}>
            <Typography variant="h5">Visibility</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Mon to Sat 9 am - 7 pm
            </Typography>
          </Grid>
          <Grid item xs={3} style={{ padding: '10px' }}>
            <Typography variant="h5">Location</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue
            </Typography>
          </Grid>
          <Grid item xs={3} style={{ padding: '10px' }}>
            <Typography variant="h5">Category</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Categort type 1, Categort type 2, Categort type 3
            </Typography>
          </Grid>
          <Grid item xs={3} style={{ padding: '10px' }}>
            <Typography variant="h5">Created at</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              03-04-2021
            </Typography>
          </Grid>
        </Grid>
      </Card>
      {about.map((data) => (
        <Accordion
          key={Math.random()}
          style={{
            padding: '10px 20px',
            margin: '20px 0',
            boxShadow:
              '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px rgba(145, 158, 171, 0.24)',
            borderRadius: '16px',
          }}
        >
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">Role name type 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec
            consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor.
            Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui nisi
            placerat. \{' '}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
