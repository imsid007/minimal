import orderBy from 'lodash/orderBy';
import { useEffect, useCallback, useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Grid, Button, Container, Stack } from '@mui/material';
// hooks

import useSettings from 'src/hooks/useSettings';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
// utils
import axios from 'src/utils/axios';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// @types
import { Post } from 'src/@types/blog';
// layouts
import Layout from 'src/layouts';
// components
import Page from 'src/components/Page';
import Iconify from 'src/components/Iconify';
import { SkeletonPostItem } from 'src/components/skeleton';
import HeaderBreadcrumbs from 'src/components/HeaderBreadcrumbs';
import EventCard from 'src/components/dashbaord/event-card';
// sections
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from 'src/sections/@dashboard/blog';
import TabsHeader from 'src/components/dashbaord/tabs-header';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

Events.getLayout = function getLayout(page: React.ReactElement) {
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

export default function Events() {
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
    <Page title="Blog: Posts">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Upcomming Events"
          action={
            <NextLink href={PATH_DASHBOARD.blog.newPost} passHref>
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New Post
              </Button>
            </NextLink>
          }
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch />
          {/* <BlogPostsSort query={filters} options={SORT_OPTIONS} onSort={handleChangeSort} /> */}
        </Stack>

        <Grid container spacing={3}>
          {(!posts.length ? [...Array(12)] : sortedPosts).map((post, index) =>
            post ? (
              <Grid key={post.id} item xs={12} sm={6} md={6}>
                <EventCard post={post} index={index} />
              </Grid>
            ) : (
              <SkeletonPostItem key={index} />
            )
          )}
        </Grid>
      </Container>
    </Page>
  );
}
