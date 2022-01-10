import { capitalCase } from 'change-case';
import { useState } from 'react';
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
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
// sections
import {
  Profile,
  ProfileCover,
  ProfileFriends,
  ProfileGallery,
  ProfileFollowers,
} from 'src/sections/@dashboard/user/profile';
import News from 'src/components/dashbaord/tabs/news';
import Media from 'src/components/dashbaord/tabs/media';
import MembersList from 'src/components/dashbaord/tabs/members';
import Chat from 'src/pages/dashboard/chat/new';
import TabsHeader from 'src/components/dashbaord/tabs-header';
import Resource from 'src/components/dashbaord/tabs/resourse';
import Followers from 'src/components/dashbaord/tabs/followers';
import ClubsList from 'src/components/dashbaord/tabs/clubs';

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

  const [currentTab, setCurrentTab] = useState('Profile');
  const [findFriends, setFindFriends] = useState('');

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue);
  };

  const handleFindFriends = (value: string) => {
    setFindFriends(value);
  };

  const PROFILE_TABS = [
    {
      value: 'Profile',
      icon: <Iconify icon={'carbon:user-avatar-filled'} width={20} height={20} />,
      component: <News myProfile={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'Followers',
      icon: <Iconify icon={'mdi:account-group'} width={20} height={20} />,
      component: <Followers followers={_userFollowers} />,
    },

    {
      value: 'Clubs',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: (
        <ClubsList
          friends={_userFriends}
          findFriends={findFriends}
          onFindFriends={handleFindFriends}
        />
      ),
    },
    {
      value: 'Media',
      icon: <Iconify icon={'foundation:photo'} width={20} height={20} />,
      component: <MediaList gallery={_userGallery} />,
    },
    {
      value: 'Resources',
      icon: <Iconify icon={'fluent:vehicle-car-profile-ltr-20-filled'} width={20} height={20} />,
      component: <Resource />,
    },
  ];

  return (
    <Page title="User: Profile">
      <Container sx={{ mt: 15 }} maxWidth={themeStretch ? false : 'lg'}>
        <TabsHeader heading="Profile" />
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
              {PROFILE_TABS.map((tab) => (
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

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
