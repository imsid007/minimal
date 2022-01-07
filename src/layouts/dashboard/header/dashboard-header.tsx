// @mui
import { styled } from '@mui/material/styles';
import { Button, Stack, AppBar, Toolbar, Tabs, Tab, TextField, Input } from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';

import AccountPopover from './AccountPopover';

import NotificationsPopover from './NotificationsPopover';
import { useState } from 'react';

// ----------------------------------------------------------------------

type RootStyleProps = {
  isCollapse: boolean;
  isOffset: boolean;
  verticalLayout: boolean;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) =>
    prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})<RootStyleProps>(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: '100%',
    borderBottom: '1px solid #EEEEEE',
  },
}));

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  display: 'flex',
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

type Props = {
  onOpenSidebar?: VoidFunction;
  isCollapse?: boolean;
  verticalLayout?: boolean;
};

export default function DashboardHeaderV2({
  onOpenSidebar,
  isCollapse = true,
  verticalLayout = false,
}: Props) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;

  const [currentTab, setCurrentTab] = useState('Evenets');

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          //   px: { lg: 5 },
        }}
        style={{
          padding: ' 0 2%',
          borderBottom: '1px solid #EEEEEE',
          width: '100%',
          height: '100%',
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          style={{ width: '100%', height: '100%' }}
          justifyContent="space-between"
        >
          <div>
            <Logo sx={{ mr: 2.5, mb: 2 }} />
          </div>

          {/* <Searchbar /> */}
          <Stack
            direction="row"
            alignItems="center"
            style={{ height: '100%' }}
            spacing={{ xs: 0.5, sm: 1.5 }}
          >
            <Input />
            <TabsWrapperStyle>
              <Tabs
                value={currentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={(e, value) => handleChangeTab(value)}
                style={{ height: '100%', display: 'flex' }}
              >
                {['Evenets', 'Groups', 'Club Management'].map((tab) => (
                  <Tab disableRipple key={tab} value={tab} label={tab} />
                ))}
              </Tabs>
            </TabsWrapperStyle>
          </Stack>
          <div>
            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
              {/* <LanguagePopover /> */}
              <NotificationsPopover />
              {/* <ContactsPopover /> */}
              <AccountPopover />
            </Stack>
          </div>
        </Stack>
      </Toolbar>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          //   px: { lg: 5 },
        }}
        style={{ padding: ' 0 10%', width: '100%', height: '100%', backgroundColor: '#ffffffcc' }}
      >
        <Stack direction="row" justifyContent="center" style={{ width: '100%' }}>
          <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
            <TextField variant="standard" fullWidth label="Inactive" />
          </div>
          <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
            <TextField variant="standard" fullWidth label="Inactive" />
          </div>
          <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
            <TextField variant="standard" fullWidth label="Inactive" />
          </div>
          <div style={{ padding: '0 3%' }}>
            <Button
              style={{ marginTop: '20px' }}
              variant="contained"
              target="_blank"
              rel="noopener"
              href="https://material-ui.com/store/items/minimal-dashboard/"
            >
              Get Started
            </Button>
          </div>
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
