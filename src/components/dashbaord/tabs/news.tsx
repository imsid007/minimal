// @mui
import {
  Grid,
  Stack,
  SvgIcon,
  Typography,
  Drawer,
  Button,
  Switch,
  Card,
  TextField,
} from '@mui/material';
// @types
import { Profile as UserProfile, UserPost } from '../../../../@types/user';
//

import ProfileAbout from 'src/sections/@dashboard/user/profile/ProfileAbout';
import ProfilePostCard from 'src/sections/@dashboard/user/profile/ProfilePostCard';
import ProfilePostInput from 'src/sections/@dashboard/user/profile/ProfilePostInput';
import ProfileFollowInfo from 'src/sections/@dashboard/user/profile/ProfileFollowInfo';
import ProfileSocialInfo from 'src/sections/@dashboard/user/profile/ProfileSocialInfo';
import TabsHeader from '../tabs-header';
import TextIconLabel from 'src/components/TextIconLabel';
import Iconify from 'src/components/Iconify';
import { Page } from '@react-pdf/renderer';
import MediaCard from '../media-card';
import { useState } from 'react';
import CreateNewsDrawer from '../siders/create-news';

// ----------------------------------------------------------------------

type Props = {
  myProfile: UserProfile;
  posts: UserPost[];
};

export default function News({ myProfile, posts }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Page>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <TabsHeader
          heading="News"
          action={
            <TextIconLabel
              sx={{ mt: 2 }}
              icon={
                <SvgIcon color="action" style={{ width: '25px' }}>
                  <Iconify
                    sx={{ mr: '2', color: 'rgba(0, 171, 85, 1)' }}
                    icon={'ant-design:plus-circle-outlined'}
                    width={15}
                    height={15}
                  />
                </SvgIcon>
              }
              value={
                <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                  Create news
                </Typography>
              }
            />
          }
        />
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3}>
            {/* <ProfilePostInput /> */}
            {posts.map((post) => (
              <ProfilePostCard key={post.id} post={post} />
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* <ProfileFollowInfo profile={myProfile} /> */}
            <ProfileAbout profile={myProfile} />
            <Card>
              <MediaCard cardHeader="social" isSeeAll={true} />
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <CreateNewsDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </Page>
  );
}