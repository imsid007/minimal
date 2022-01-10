import { Container, Card, Button, Grid, Box, Typography, Pagination, Divider } from '@mui/material';
import { Page } from '@react-pdf/renderer';
import React, { useState } from 'react';
import Iconify from 'src/components/Iconify';
import useSettings from 'src/hooks/useSettings';
import Layout from 'src/layouts';
import {
  BlogPostCommentForm,
  BlogPostCommentList,
  BlogPostTags,
} from 'src/sections/@dashboard/blog';
import { ProfileCover } from 'src/sections/@dashboard/user/profile';
import { _userAbout, _userCards } from 'src/_mock';
import { Post } from 'src/@types/blog';
import { useCallback } from 'react';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SkeletonPost } from 'src/components/skeleton';
import UserCard1 from 'src/sections/@dashboard/user/cards/userCard1';

EventDetails.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function EventDetails() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { title } = query;
  console.log(query);

  const [recentPosts, setRecentPosts] = useState([]);

  const [post, setPost] = useState<Post | null>(null);

  const [error, setError] = useState(null);

  const getPost = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title: 'apply-these-7-secret-techniques-to-improve-event' },
        // params: { title },
      });

      setPost(response.data.post);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, [title]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <Page title="User: Profile">
      <Container sx={{ mt: 15, mb: 4 }} maxWidth={themeStretch ? false : 'lg'}>
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <Button
            style={{ position: 'absolute', right: '20px', top: '20px', zIndex: '10' }}
            variant="contained"
            // startIcon={<Iconify icon={'clarity:pencil-solid'} width={20} height={20} />}
          >
            Get Ticket
          </Button>
          <ProfileCover myProfile={_userAbout} />
        </Card>

        <Grid container spacing={2}>
          <Grid item md={8}>
            <Card>
              {post && (
                <Box sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h6" sx={{ mb: 5 }}>
                    {post.description}
                  </Typography>

                  <Box sx={{ my: 5 }}>
                    <Divider />
                    <BlogPostTags post={post} />
                    <Divider />
                  </Box>

                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <Typography variant="h4">Comments</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                      ({post.comments.length})
                    </Typography>
                  </Box>

                  <BlogPostCommentList post={post} />

                  <Box sx={{ mb: 5, mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Pagination count={8} color="primary" />
                  </Box>

                  <BlogPostCommentForm />
                </Box>
              )}

              {!post && !error && <SkeletonPost />}

              {error && <Typography variant="h6">404 {error}!</Typography>}
            </Card>
          </Grid>
          <Grid item md={4}>
            {_userCards.map((user, index) =>
              index == 0 ? <UserCard1 key={user.id} user={user} /> : null
            )}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
