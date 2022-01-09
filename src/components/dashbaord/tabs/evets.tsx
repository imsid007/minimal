import orderBy from 'lodash/orderBy';
import { useEffect, useCallback, useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Grid, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// utils
import axios from '../../../utils/axios';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { Post } from '../../../@types/blog';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import { SkeletonPostItem } from '../../../components/skeleton';

// sections
import { BlogPostsSearch } from '../../../sections/@dashboard/blog';
import EventCard from '../event-card';
import TabsHeader from '../tabs-header';
import TextIconLabel from 'src/components/TextIconLabel';
import CreateEventDrawer from '../siders/create-event';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

EventList.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

const applySort = (posts: Post[], sortBy: string) => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};

export default function EventList() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { themeStretch } = useSettings();

  const isMountedRef = useIsMountedRef();

  const [posts, setPosts] = useState([]);

  const [filters, setFilters] = useState('latest');

  const sortedPosts = applySort(posts, filters);

  const getAllPosts = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/posts/all');

      if (isMountedRef.current) {
        setPosts(response.data.posts);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  const handleChangeSort = (value: string) => {
    if (value) {
      setFilters(value);
    }
  };

  return (
    <Page title="Blog: Posts" style={{ paddingBottom: '100px' }}>
      <TabsHeader
        heading="Upcomming Events"
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
              <div onClick={() => setIsDrawerOpen(true)}>
                <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                  Create new Event
                </Typography>
              </div>
            }
          />
        }
      />
      <div>
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
        </Stack>

        <Grid container spacing={3}>
          {(!posts.length ? [...Array(5)] : sortedPosts).map((post, index) =>
            post ? (
              <Grid key={post.id} item xs={12} sm={6} md={6}>
                {/* <BlogPostCard post={post} index={index} /> */}
                <EventCard post={post} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )}
        </Grid>
        <CreateEventDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </div>
    </Page>
  );
}
