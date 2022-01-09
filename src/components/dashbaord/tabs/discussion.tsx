import { SvgIcon, Typography } from '@mui/material';
import { Page } from '@react-pdf/renderer';
import React, { useState } from 'react';
import Iconify from 'src/components/Iconify';
import TextIconLabel from 'src/components/TextIconLabel';
import Chat from 'src/pages/dashboard/chat/[conversationKey]';
import chat from 'src/redux/slices/chat';
import CreateChannelDrawer from '../siders/create-channel';
import TabsHeader from '../tabs-header';

export default function Discussion() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Page>
      <TabsHeader
        heading="Channels"
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
                  Create Channel
                </Typography>
              </div>
            }
          />
        }
      />
      <Chat />
      <CreateChannelDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
    </Page>
  );
}
