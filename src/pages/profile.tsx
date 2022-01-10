import { capitalCase } from 'change-case';
import { useEffect, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Tab,
  Box,
  Card,
  Tabs,
  Container,
  Button,
  AvatarGroup,
  Stack,
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

// sections
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
      component: <AboutUser myProfile={_userAbout} posts={_userFeeds} />,
    },
    {
      value: 'Events',
      icon: <Iconify icon={'bi:calendar-event-fill'} width={20} height={20} />,
      component: <EventList />,
    },
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
      component: (
        <Card sx={{ height: '72vh', display: 'flex' }}>
          <ChatSidebar />
          <ChatWindow />
        </Card>
      ),
    },
    {
      value: 'Members',
      icon: <Iconify icon={'mdi:account-group'} width={20} height={20} />,
      component: <Followers followers={_userFollowers} />,
    },
    {
      value: 'More',
      icon: <Iconify icon={'octicon:kebab-horizontal-16'} width={20} height={20} />,
      component: <ProfileGallery gallery={_userGallery} />,
    },
  ];

  const userGroup = [
    'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg',
    'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg',
    'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg',
    'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg',
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

          <Button
            style={{ position: 'absolute', right: '20px', top: '20px', zIndex: '10' }}
            variant="contained"
            startIcon={<Iconify icon={'clarity:pencil-solid'} width={20} height={20} />}
          >
            Edit Profile
          </Button>

          <Stack
            direction="row"
            alignItems="center"
            style={{ position: 'absolute', right: '20px', bottom: '50px', zIndex: '10' }}
          >
            <div>
              <AvatarGroup
                sx={{
                  '& .MuiAvatar-root': { width: 32, height: 32 },
                }}
                max={3}
                spacing="small"
              >
                {userGroup.map((url) => (
                  <Avatar key={Math.random()} alt="Remy Sharp" src={url} />
                ))}
              </AvatarGroup>
              <Typography variant="body2" sx={{ color: '#fff', mt: 1 }}>
                Follower
              </Typography>
            </div>
            <div style={{ marginLeft: '40px' }}>
              <AvatarGroup
                sx={{
                  '& .MuiAvatar-root': { width: 32, height: 32 },
                }}
                max={3}
                spacing="small"
              >
                {userGroup.map((url) => (
                  <Avatar key={Math.random()} alt="Remy Sharp" src={url} />
                ))}
              </AvatarGroup>
              <Typography variant="body2" sx={{ color: '#fff', mt: 1 }}>
                Follower
              </Typography>
            </div>
          </Stack>

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
