// @mui
import { Grid, Stack, SvgIcon, Typography, Card } from '@mui/material';
// @types
import { Profile as UserProfile, UserPost } from '../../../../@types/user';
//

import ProfileAbout from 'src/sections/@dashboard/user/profile/ProfileAbout';
import ProfilePostCard from 'src/sections/@dashboard/user/profile/ProfilePostCard';

import TabsHeader from '../tabs-header';
import TextIconLabel from 'src/components/TextIconLabel';
import Iconify from 'src/components/Iconify';
import { Page } from '@react-pdf/renderer';
import MediaCard from '../media-card';
import { useState } from 'react';
import CreateNewsDrawer from '../siders/create-news';
import UserStatisticsCard from '../user-statistics-card';

// ----------------------------------------------------------------------

type Props = {
  myProfile: UserProfile;
  posts: UserPost[];
  isSelf?: boolean;
};

export default function News({ isSelf, myProfile, posts }: Props) {
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
            isSelf ? (
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
            ) : null
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
            <Card
              style={{
                paddingBottom: '20px',
                boxShadow:
                  '0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px rgba(145, 158, 171, 0.24)',
              }}
            >
              {isSelf ? (
                <MediaCard cardHeader="Recent media" isSeeAll={true} />
              ) : (
                <UserStatisticsCard />
              )}
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <CreateNewsDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </Page>
  );
}
