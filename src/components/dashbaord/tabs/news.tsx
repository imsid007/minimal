// @mui
import { Grid, Stack } from '@mui/material';
// @types
import { Profile as UserProfile, UserPost } from '../../../../@types/user';
//

import ProfileAbout from 'src/sections/@dashboard/user/profile/ProfileAbout';
import ProfilePostCard from 'src/sections/@dashboard/user/profile/ProfilePostCard';
import ProfilePostInput from 'src/sections/@dashboard/user/profile/ProfilePostInput';
import ProfileFollowInfo from 'src/sections/@dashboard/user/profile/ProfileFollowInfo';
import ProfileSocialInfo from 'src/sections/@dashboard/user/profile/ProfileSocialInfo';

// ----------------------------------------------------------------------

type Props = {
  myProfile: UserProfile;
  posts: UserPost[];
};

export default function News({ myProfile, posts }: Props) {
  return (
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
          <ProfileSocialInfo profile={myProfile} />
        </Stack>
      </Grid>
    </Grid>
  );
}
