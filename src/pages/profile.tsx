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

  const [currentTab, setCurrentTab] = useState('profile');
  const [findFriends, setFindFriends] = useState('');

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue);
  };

  const handleFindFriends = (value: string) => {
    setFindFriends(value);
  };

  const PROFILE_TABS = [
    {
      value: 'About',
      icon: <Iconify icon={'fa-solid:info-circle'} width={20} height={20} />,
      component: <Profile myProfile={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'Events',
      icon: <Iconify icon={'bi:calendar-event-fill'} width={20} height={20} />,
      component: <ProfileFollowers followers={_userFollowers} />,
    },
    // {
    //   value: 'News',
    //   icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
    //   component: (
    //     <ProfileFriends
    //       friends={_userFriends}
    //       findFriends={findFriends}
    //       onFindFriends={handleFindFriends}
    //     />
    //   ),
    // },
    {
      value: 'News',
      icon: <Iconify icon={'ion:newspaper-sharp'} width={20} height={20} />,
      component: <Profile myProfile={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'Media',
      icon: <Iconify icon={'foundation:photo'} width={20} height={20} />,
      component: <ProfileGallery gallery={_userGallery} />,
    },
    {
      value: 'Discussion',
      icon: <Iconify icon={'healthicons:group-discussion-meetingx3'} width={20} height={20} />,
      component: <ProfileGallery gallery={_userGallery} />,
    },
    {
      value: 'Members',
      icon: <Iconify icon={'mdi:account-group'} width={20} height={20} />,
      component: <ProfileFollowers followers={_userFollowers} />,
    },
    {
      value: 'More',
      icon: <Iconify icon={'octicon:kebab-horizontal-16'} width={20} height={20} />,
      component: <ProfileGallery gallery={_userGallery} />,
    },
  ];

  return (
    <Page title="User: Profile">
      <Container sx={{ mt: 25 }} maxWidth={themeStretch ? false : 'lg'}>
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
