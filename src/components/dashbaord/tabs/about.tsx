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
  SvgIcon,
} from '@mui/material';

import React from 'react';
import Page from 'src/components/Page';
import TextIconLabel from 'src/components/TextIconLabel';
import Iconify from 'src/components/Iconify';
import TabsHeader from '../tabs-header';
import { useState } from 'react';
import CreateRoleDrawer from '../siders/create-role';

const about = [1, 2, 3];
export default function About() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const contact = [
    {
      title: 'Chandigarh Sector 20 Lorem ipsum dolor sit amet',
      icon: 'carbon:location-filled',
    },
    {
      title: 'davinder2038@gmail.com',
      icon: 'fluent:mail-28-filled',
    },
    {
      title: '+91-904-1226-707',
      icon: 'ci:phone',
    },
  ];

  const Emergency_contact = [
    {
      title: 'Harpreet kaur',
      icon: 'bx:bxs-user',
    },
    {
      title: '+91-904-1226-707, +91-700-9119-313',
      icon: 'ci:phone',
    },
    {
      title: 'Sister',
      icon: 'emojione-monotone:two-hearts',
    },
  ];

  const bullets = [
    {
      title: 'Visibility',
      description: 'Mon to Sat 9 am - 7 pm',
    },
    {
      title: 'Location',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue',
    },
    {
      title: 'Category',
      description: 'Categort type 1, Categort type 2, Categort type 3',
    },
    {
      title: 'Created at',
      description: '03-04-2021',
    },
  ];

  return (
    <div>
      <TabsHeader heading="About this club" />
      <Card style={{ padding: ' 20px', marginBottom: '20px' }}>
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
                icon={<Typography variant="h6">21</Typography>}
                value={
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 1 }}>
                    {' '}
                    Common in the both
                  </Typography>
                }
              />
              <TextIconLabel
                sx={{ ml: 2 }}
                icon={<Typography variant="h6">48</Typography>}
                value={
                  <Typography variant="body1" sx={{ color: 'text.secondary', ml: 1 }}>
                    {' '}
                    Clubs
                  </Typography>
                }
              />
              <TextIconLabel
                sx={{ ml: 2 }}
                icon={<Typography variant="h6">30</Typography>}
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
      </Card>
      <Card style={{ padding: ' 40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec
            consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor.
            Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui nisi
            placerat. Tempus risus pretium arcu, tincidunt faucibus. Ferment um, facilisis nunc sit
            sit amet. Tortor, ac id mi sodales eu nulla quis fermentum commodo. Tempor diam id
            libero convallis neque aliquam morbi. Montes, arcu aliquam, vulputate imperdiet in non
            interdum sem.
          </Typography>
        </div>
        <Divider />
        <Grid container style={{ marginTop: '20px' }}>
          {bullets.map((bullet) => (
            <Grid key={Math.random()} item xs={3} style={{ padding: '10px' }}>
              <Typography variant="h6">{bullet.title}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {bullet.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Divider />
        <Grid container style={{ marginTop: '20px' }}>
          <Grid item xs={6}>
            <Typography variant="h6">Contact</Typography>
            {contact.map((contact) => (
              <TextIconLabel
                key={Math.random()}
                sx={{ mt: 2 }}
                icon={
                  <SvgIcon color="action" style={{ width: '25px' }}>
                    <Iconify sx={{ mr: '2' }} icon={contact.icon} width={15} height={15} />
                  </SvgIcon>
                }
                value={
                  <Typography sx={{ ml: 2, color: 'text.secondary' }} variant="body1">
                    {contact.title}
                  </Typography>
                }
              />
            ))}
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">Emergency Contact</Typography>
            {Emergency_contact.map((contact) => (
              <TextIconLabel
                key={Math.random()}
                sx={{ mt: 2 }}
                icon={
                  <SvgIcon color="action" style={{ width: '25px' }}>
                    <Iconify sx={{ mr: '2' }} icon={contact.icon} width={15} height={15} />
                  </SvgIcon>
                }
                value={
                  <Typography sx={{ ml: 2, color: 'text.secondary' }} variant="body1">
                    {contact.title}
                  </Typography>
                }
              />
            ))}
          </Grid>
        </Grid>
      </Card>
      <TabsHeader
        sx={{ mt: 3 }}
        heading="Roles for Club"
        action={
          <TextIconLabel
            icon={
              <SvgIcon color="action" style={{ width: '25px' }}>
                <Iconify
                  sx={{ mr: '2', color: 'rgba(0, 171, 85, 1)' }}
                  icon={'ant-design:plus-circle-outlined'}
                  width={15}
                  height={15}
                />
              </SvgIcon>
            }
            value={
              <div style={{ cursor: 'pointer' }} onClick={() => setIsDrawerOpen(true)}>
                <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                  Add new role
                </Typography>
              </div>
            }
          />
        }
      />
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

      <CreateRoleDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
}
