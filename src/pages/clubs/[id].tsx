import { capitalCase } from 'change-case';
import { useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';

// hooks
import useAuth from 'src/hooks/useAuth';
import useSettings from 'src/hooks/useSettings';
// _mock_
import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from 'src/_mock';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import Iconify from 'src/components/Iconify';

// sections

import Receipts from 'src/components/dashbaord/account/receipts';
import Notifications from 'src/components/dashbaord/account//notifications';
import SocialLinks from 'src/components/dashbaord/account//socialLinks';
import ChangePassword from '../../components/dashbaord/account/changePassword';
import General from 'src/components/dashbaord/account//general';

import { ProfileCover, ProfileGallery } from 'src/sections/@dashboard/user/profile';
import { ChatSidebar, ChatWindow } from 'src/sections/@dashboard/chat';
import { getConversations, getContacts } from 'src/redux/slices/chat';
import { useDispatch } from 'src/redux/store';
import Events from 'src/sections/@dashboard/user/profile/Events';
import EventList from 'src/components/dashbaord/tabs/evets';
import News from 'src/components/dashbaord/tabs/news';
import Media from 'src/components/dashbaord/tabs/media';
import Followers from 'src/components/dashbaord/tabs/followers';
import AboutUser from 'src/components/dashbaord/tabs/about';
import ClubGeneral from 'src/components/dashbaord/account/club-general';

// ----------------------------------------------------------------------

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

// ----------------------------------------------------------------------

UserProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();

  const [currentTab, setCurrentTab] = useState('general');
  const [findFriends, setFindFriends] = useState('');

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue);
  };

  const handleFindFriends = (value: string) => {
    setFindFriends(value);
  };

  const CLUB_TABS = [
    {
      value: 'general',
      icon: <Iconify icon={'ic:round-account-box'} width={20} height={20} />,
      component: <ClubGeneral />,
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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConversations());
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page title="User: Profile">
      <Container sx={{ mt: 15 }} maxWidth={themeStretch ? false : 'lg'}>
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <ProfileCover myProfile={_userAbout} />

          <TabsWrapperStyle>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={(e, value) => handleChangeTab(value)}
            >
              {CLUB_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={capitalCase(tab.value)}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {CLUB_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
