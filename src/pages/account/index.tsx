// @mui
import * as Yup from 'yup';
import { capitalCase } from 'change-case';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/Iconify';
import { Typography, Card, Box, Tabs, Tab, Grid, Container } from '@mui/material';
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
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// hooks
import useSettings from 'src/hooks/useSettings';
// layouts
import Layout from '../../../src/layouts';
// components
import Page from 'src/components/Page';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import {
  AccountGeneral,
  AccountBilling,
  AccountSocialLinks,
  AccountNotifications,
  AccountChangePassword,
} from '../../sections/@dashboard/user/account';
import AccountUserNewForm from './components/userfrom';
import AccountBillingAddressBook from './components/accountbilling';
import { RHFUploadMultiFile } from '../../components/hook-form';
import Receipts from './receipts';
import Notifications from './notifications';
import SocialLinks from './socialLinks';
import ChangePassword from './changePassword';
import General from './general';

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

Account.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Account() {
  const { themeStretch } = useSettings();

  const [currentTab, setCurrentTab] = useState('profile');

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue);
  };
  const ACCOUNT_TABS = [
    {
      value: 'general',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <General />,
    },
    {
      value: 'Receipts $ Documents',
      icon: <Iconify icon={'ic:round-receipt'} width={20} height={20} />,
      component: (
        // <AccountBilling
        //   cards={_userPayment}
        //   addressBook={_userAddressBook}
        //   invoices={_userInvoices}
        // />
        <Receipts />
      ),
    },
    {
      value: 'notifications',
      icon: <Iconify icon={'eva:bell-fill'} width={20} height={20} />,
      component: <Notifications />,
    },
    {
      value: 'social_links',
      icon: <Iconify icon={'eva:share-fill'} width={20} height={20} />,
      component: <SocialLinks myProfile={_userAbout} />,
    },
    {
      value: 'change_password',
      icon: <Iconify icon={'ic:round-vpn-key'} width={20} height={20} />,
      component: <ChangePassword />,
    },
  ];
  return (
    <Page title="User: Account">
      <Container sx={{ mt: 15 }} maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Account"
          links={[
            { name: 'Account Setting', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.user.list },
          ]}
        />
        <Tabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={(e, value) => setCurrentTab(value)}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={capitalCase(tab.value)}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Box sx={{ mb: 5 }} />

        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
