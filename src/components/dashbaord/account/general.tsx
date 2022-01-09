// @mui

import { Grid, Container, Typography } from '@mui/material';
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

// ----------------------------------------------------------------------

General.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function General() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Account">
      <Container sx={{ mt: 0 }} maxWidth={themeStretch ? false : 'lg'}>
        <Grid item xs={12}>
          <div>
            {/* <LabelStyle>Cover</LabelStyle> */}
            <RHFUploadSingleFile name="cover" accept="image/*" maxSize={3145728} />
          </div>
        </Grid>

        <AccountUserNewForm />
        <Grid container sx={{ mt: 2, mb: 5 }} spacing={2}>
          <Grid item md={4}></Grid>
          <Grid item xs={12} md={8}>
            <AccountBillingAddressBook addressBook={_addressBooks} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
