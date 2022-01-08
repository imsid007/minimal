// @mui
import {
  Grid,
  Stack,
  Button,
  Typography,
  Card,
  Divider,
  SvgIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
// @types
import { Profile as UserProfile, UserPost } from '../../../../@types/user';
//
import ProfileAbout from './ProfileAbout';
import ProfilePostCard from './ProfilePostCard';
import ProfilePostInput from './ProfilePostInput';
import ProfileFollowInfo from './ProfileFollowInfo';
import ProfileSocialInfo from './ProfileSocialInfo';
import TextIconLabel from 'src/components/TextIconLabel';

import Iconify from 'src/components/Iconify';
// import Accordion from 'src/theme/overrides/Accordion';

// ----------------------------------------------------------------------

type Props = {
  myProfile: UserProfile;
  posts: UserPost[];
};

export default function About({ myProfile, posts }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card style={{ padding: '20px 20px' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Button
              //   style={{ marginTop: '20px' }}
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
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      Common in the both
                    </Typography>
                  }
                />
                <TextIconLabel
                  sx={{ ml: 2 }}
                  icon={<Typography variant="h6">48</Typography>}
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      Clubs
                    </Typography>
                  }
                />
                <TextIconLabel
                  sx={{ ml: 2 }}
                  icon={<Typography variant="h6">30</Typography>}
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      Events
                    </Typography>
                  }
                />
              </Stack>
            </div>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
          About this club
        </Typography>
        <Card style={{ padding: '20px' }}>
          <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec
            consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor.
            Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui nisi
            placerat. Tempus risus pretium arcu, tincidunt faucibus. Ferment um, facilisis nunc sit
            sit amet. Tortor, ac id mi sodales eu nulla quis fermentum commodo. Tempor diam id
            libero convallis neque aliquam morbi. Montes, arcu aliquam, vulputate imperdiet in non
            interdum sem.
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <Grid container>
            <Grid item xs={3}>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Visibility
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                Mon to Sat 9 am - 7 pm
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ padding: '0 10px' }}>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Location
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ padding: '0 10px' }}>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Category{' '}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                Categort type 1, Categort type 2, Categort type 3
              </Typography>
            </Grid>

            <Grid item xs={3} style={{ padding: '0 10px' }}>
              <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                Created at
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 2 }}>
                03-04-2021{' '}
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mt: 2 }} />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                  Contact
                </Typography>

                <TextIconLabel
                  icon={
                    <SvgIcon color="action" style={{ width: '25px' }}>
                      <Iconify
                        sx={{ mr: '2' }}
                        icon={'fluent:location-20-filled'}
                        width={15}
                        height={15}
                      />
                    </SvgIcon>
                  }
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      03-04-2021{' '}
                    </Typography>
                  }
                />
                <TextIconLabel
                  sx={{ mt: 3 }}
                  icon={
                    <SvgIcon color="action" style={{ width: '25px' }}>
                      <Iconify
                        sx={{ mr: '2' }}
                        icon={'fluent:mail-24-filled'}
                        width={15}
                        height={15}
                      />
                    </SvgIcon>
                  }
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      Chandigarh Sector 20 Lorem ipsum dolor sit amet
                    </Typography>
                  }
                />
                <TextIconLabel
                  sx={{ mt: 3 }}
                  icon={
                    <SvgIcon color="action" style={{ width: '25px' }}>
                      <Iconify sx={{ mr: '2' }} icon={'ci:phone'} width={15} height={15} />
                    </SvgIcon>
                  }
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      +91-904-1226-707
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ mt: 2, mb: 2 }}>
                  Emergency Contact
                </Typography>
                <TextIconLabel
                  icon={
                    <SvgIcon color="action" style={{ width: '25px' }}>
                      <Iconify sx={{ mr: '2' }} icon={'bx:bxs-user'} width={15} height={15} />
                    </SvgIcon>
                  }
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      Harpreet kaur
                    </Typography>
                  }
                />

                <TextIconLabel
                  sx={{ mt: 3 }}
                  icon={
                    <SvgIcon color="action" style={{ width: '25px' }}>
                      <Iconify sx={{ mr: '2' }} icon={'ci:phone'} width={15} height={15} />
                    </SvgIcon>
                  }
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      +91-904-1226-707, +91-700-9119-313
                    </Typography>
                  }
                />
                <TextIconLabel
                  sx={{ mt: 3 }}
                  icon={
                    <SvgIcon color="action" style={{ width: '25px' }}>
                      <Iconify
                        sx={{ mr: '2' }}
                        icon={'emojione-monotone:two-hearts'}
                        width={15}
                        height={15}
                      />
                    </SvgIcon>
                  }
                  value={
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                      Sister
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </Stack>
        </Card>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
            Roles for Club
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
            Add New Role
          </Typography>
        </Stack>

        <Accordion
          key={Math.random()}
          style={{
            marginBottom: '20px',
            borderRadius: '16px',
            borderTop: '0px solid red',
            padding: '10px',
            boxShadow:
              '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px rgba(145, 158, 171, 0.24)',
          }}
        >
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">Role name type 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec
              consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor.
              Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui
              nisi placerat. \
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          key={Math.random()}
          style={{
            marginBottom: '20px',
            borderRadius: '16px',
            borderTop: '0px solid red',
            padding: '10px',
            boxShadow:
              '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px rgba(145, 158, 171, 0.24)',
          }}
        >
          <AccordionSummary
            expandIcon={<Iconify icon={'eva:arrow-ios-downward-fill'} width={20} height={20} />}
          >
            <Typography variant="subtitle1">Role name type 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius congue fames donec
              consequat nisl, sit imperdiet sit sagittis. Malesuada eu id sed vulputate tempor.
              Egestas odio ultrices curabitur gravida et ornare scelerisque. Eu lacus, tortor dui
              nisi placerat. \
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
