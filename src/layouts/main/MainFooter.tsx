// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack, Button } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components

import SocialsButton from '../../components/SocialsButton';
import FooterLogo from 'src/components/logo-footer';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: 'Your Account',
    children: [
      { name: 'Settings', href: PATH_PAGE.about },
      { name: 'Log out', href: PATH_PAGE.contact },
      { name: 'Help', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Discover',
    children: [
      { name: 'Groups', href: '#' },
      { name: 'Calender', href: '#' },
      { name: 'Topics', href: '#' },
      { name: 'Cities', href: '#' },
      { name: 'Online Events', href: '#' },
      { name: 'Local Guides', href: '#' },
    ],
  },
  {
    headline: 'The Expedition',
    children: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Help', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.background.default,
  backgroundColor: '#212B36',
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          {/* <Grid item xs={12} sx={{ mb: 3 }}>
          </Grid> */}
          <Grid item xs={8} md={3}>
            <FooterLogo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            <Typography variant="body2" sx={{ mt: 3, pr: { md: 5 }, color: '#DFE3E8' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eget blandit non
              sollicitudin enim a.
            </Typography>
            <Button
              style={{ marginTop: '20px' }}
              variant="contained"
              target="_blank"
              rel="noopener"
              href="https://material-ui.com/store/items/minimal-dashboard/"
            >
              Get Started
            </Button>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
            >
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline" sx={{ color: '#DFE3E8' }}>
                    {list.headline}
                  </Typography>
                  {list.children.map((link) => (
                    <NextLink key={link.name} href={link.href} passHref>
                      <Link
                        color="inherit"
                        variant="body2"
                        sx={{ display: 'block', color: '#DFE3E8' }}
                      >
                        {link.name}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 5,
            pb: 5,
            fontSize: 13,
            color: '#DFE3E8',
            textAlign: { xs: 'center', md: 'center' },
            borderTop: '1px solid #637381',
            paddingTop: '20px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, eget blandit non
          sollicitudin enim a.
        </Typography>
      </Container>
    </RootStyle>
  );
}
