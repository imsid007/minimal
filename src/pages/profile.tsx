import { capitalCase } from 'change-case';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Tab,
  Box,
  Card,
  Tabs,
  Container,
  Button,
  Stack,
  AvatarGroup,
  Avatar,
  Typography,
} from '@mui/material';
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
import { ProfileCover, ProfileGallery } from 'src/sections/@dashboard/user/profile';
import News from 'src/components/dashbaord/tabs/news';
import Media from 'src/components/dashbaord/tabs/media';
import MembersList from 'src/components/dashbaord/tabs/members';
import EventList from 'src/components/dashbaord/tabs/evets';
import { ChatRoom } from 'src/sections/@dashboard/chat';
import Chat from './dashboard/chat/[conversationKey]';
import About from 'src/components/dashbaord/tabs/about';
import TabsHeader from 'src/components/dashbaord/tabs-header';
import Discussion from 'src/components/dashbaord/tabs/discussion';

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

  const [currentTab, setCurrentTab] = useState('About');
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
      component: <About />,
    },
    {
      value: 'Events',
      icon: <Iconify icon={'bi:calendar-event-fill'} width={20} height={20} />,
      component: <EventList />,
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
      component: <News isSelf={true} myProfile={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'Media',
      icon: <Iconify icon={'foundation:photo'} width={20} height={20} />,
      component: <Media isSelf={true} gallery={_userGallery} />,
    },
    {
      value: 'Discussion',
      icon: <Iconify icon={'healthicons:group-discussion-meetingx3'} width={20} height={20} />,
      component: <Discussion />,
    },
    {
      value: 'Members',
      icon: <Iconify icon={'mdi:account-group'} width={20} height={20} />,
      component: <MembersList followers={_userFollowers} />,
    },
    {
      value: 'More',
      icon: <Iconify icon={'octicon:kebab-horizontal-16'} width={20} height={20} />,
      component: <ProfileGallery gallery={_userGallery} />,
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
          <Button
            style={{ position: 'absolute', zIndex: '100', right: 30, top: 20 }}
            variant="contained"
            startIcon={<Iconify icon={'clarity:edit-solid'} width={20} height={20} />}
          >
            Edit profile
          </Button>
          <Stack
            direction="row"
            style={{ position: 'absolute', zIndex: '100', right: 30, bottom: 50 }}
          >
            <div>
              <AvatarGroup max={3} spacing="small">
                <Avatar
                  alt="Remy Sharp"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
                />
              </AvatarGroup>
              <Typography varient="body2" sx={{ color: '#fff', mt: 1 }}>
                Follower
              </Typography>
            </div>
            <div style={{ marginLeft: '40px' }}>
              <AvatarGroup max={3} spacing="small">
                <Avatar
                  alt="Remy Sharp"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg"
                />
                <Avatar
                  alt="Cindy Baker"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"
                />
                <Avatar
                  alt="Agnes Walker"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"
                />
              </AvatarGroup>
              <Typography varient="body2" sx={{ color: '#fff', mt: 1 }}>
                Following
              </Typography>
            </div>
          </Stack>

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
