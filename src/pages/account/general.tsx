// @mui

import { Grid, Container } from '@mui/material';
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
import Layout from '../../../src/layouts';
// components
import Page from 'src/components/Page';
import AccountUserNewForm from './components/userfrom';
import AccountBillingAddressBook from './components/accountbilling';

// ----------------------------------------------------------------------

General.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function General() {
  const { themeStretch } = useSettings();

  return (
    <Page title="User: Account">
      <Container sx={{ mt: 0 }} maxWidth={themeStretch ? false : 'lg'}>
        <AccountUserNewForm />
        <Grid container sx={{ mt: 5, mb: 5 }} spacing={2}>
          <Grid item xs={12} md={4}></Grid>
          <Grid item xs={12} md={8}>
            <AccountBillingAddressBook addressBook={_addressBooks} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
