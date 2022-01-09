// @mui
import { styled } from '@mui/material/styles';
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  TextField,
  Input,
  InputAdornment,
} from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';

import Iconify from 'src/components/Iconify';

import AccountPopover from './AccountPopover';

import NotificationsPopover from './NotificationsPopover';
import { useState } from 'react';
import LanguagePopover from './LanguagePopover';

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
  filter?: boolean;
};

const category = [
  'Select category',
  'Carrier & Business',
  'Carrier & Business',
  'Carrier & Business',
];

export default function DashboardHeaderV2({
  onOpenSidebar,
  isCollapse = true,
  verticalLayout = false,
  filter = false,
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
            <TextField
              fullWidth
              variant="filled"
              placeholder="search"
              style={{ borderRadius: '30px', overflow: 'hidden' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="bx:bx-search" width={24} height={24} />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <div>
            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
              <Iconify
                sx={{ color: 'rgba(99, 115, 129, 1)' }}
                icon="bi:chat-fill"
                width={24}
                height={24}
              />
              <NotificationsPopover />
              {/* <ContactsPopover /> */}
              <AccountPopover />
            </Stack>
          </div>
        </Stack>
      </Toolbar>
      {filter ? (
        <Toolbar
          sx={{
            minHeight: '100% !important',
            //   px: { lg: 5 },
          }}
          style={{ padding: ' 0 10%', width: '100%', height: '100%', backgroundColor: '#ffffffcc' }}
        >
          <Stack direction="row" justifyContent="center" style={{ width: '100%' }}>
            <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
              <TextField
                fullWidth
                label=" "
                variant="standard"
                placeholder="search"
                style={{ borderRadius: '30px', overflow: 'hidden' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="bx:bx-search" width={24} height={24} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
              <TextField variant="standard" fullWidth label="Inactive" />
            </div>
            <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
              <TextField
                select
                fullWidth
                variant="standard"
                size="small"
                //   value={currency}
                label=" "
                SelectProps={{ native: true }}
                //   onChange={handleChangeCurrency}
              >
                {category.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
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
      ) : null}
    </RootStyle>
  );
}
