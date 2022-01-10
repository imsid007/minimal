// @mui

import { Container, Typography, Grid, Stack, Card, CardHeader } from '@mui/material';
import {
  _userFeeds,
  _userFriends,
  _userGallery,
  _userPayment,
  _userAddressBook,
  _userInvoices,
  _userFollowers,
  _addressBooks,
  _userAbout,
} from 'src/_mock';

// hooks
import useSettings from 'src/hooks/useSettings';
// layouts
import Layout from 'src/layouts';

import Page from 'src/components/Page';
import AccountUserNewForm from './userfrom';

import AccountBillingAddressBook from 'src/components/dashbaord/account/accountbilling';
import { styled } from '@mui/material/styles';
import { RHFUploadSingleFile } from 'src/components/hook-form';
import { AppWidget } from 'src/sections/@dashboard/general/app';
import { BankingRecentTransitions } from 'src/sections/@dashboard/general/banking';
import {
  AnalyticsCurrentVisits,
  AnalyticsNewsUpdate,
  AnalyticsOrderTimeline,
  AnalyticsTasks,
} from 'src/sections/@dashboard/general/analytics';

// ----------------------------------------------------------------------

ClubGeneral.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function ClubGeneral() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Account">
      <Grid container spacing={2}>
        <Grid item md={4}>
          <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
        </Grid>
        <Grid item md={4}>
          <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
        </Grid>
        <Grid item md={4}>
          <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Stack spacing={3} sx={{ mt: 2, mb: 2 }}>
            <BankingRecentTransitions />
            <AnalyticsTasks />
            <AnalyticsNewsUpdate />
          </Stack>
        </Grid>
        <Grid item md={4}>
          <Stack spacing={3} sx={{ mt: 2, mb: 2 }}>
            <AnalyticsCurrentVisits />
            <AnalyticsOrderTimeline />
          </Stack>
        </Grid>
      </Grid>
    </Page>
  );
}
