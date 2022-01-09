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
import { BookingNewestBooking } from 'src/sections/@dashboard/general/booking';
import CreateResourceDrawer from '../siders/create-resource';

// ----------------------------------------------------------------------

type Props = {
  myProfile: UserProfile;
  posts: UserPost[];
};

export default function Resource() {
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
          heading="Resources owned by vaibhav"
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
                  Create Resources
                </Typography>
              }
            />
          }
        />
      </div>
      <BookingNewestBooking />
      <CreateResourceDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </Page>
  );
}
