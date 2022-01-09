// @mui
import { styled } from '@mui/material/styles';
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  TextField,
  Input,
  InputAdornment,
  Typography,
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
import Link from 'next/link';

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
  tab?: number;
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
  tab,
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
        }}
        style={{
          boxShadow: '00px 4px 30px rgba(0, 0, 0, 0.05)',
          padding: ' 0 2%',
          borderBottom: '1px solid #EEEEEE',
          width: '100%',
          height: '100%',
          backgroundColor: filter ? '#fff' : null,
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
          <Stack direction="row" alignItems="center" style={{ height: '100%' }}>
            <TextField
              label=" "
              variant="standard"
              placeholder="search..."
              style={{
                width: '300px',
                borderRadius: '30px',
                backgroundColor: '#F4F6F8',
                padding: '0 15px 10px  ',
                overflow: 'hidden',
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="bx:bx-search" width={24} height={24} />
                  </InputAdornment>
                ),
              }}
            />
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                borderBottom: tab == 1 ? '3px solid rgba(0, 171, 85, 1)' : '0px',
                color: '#000000',
                marginLeft: '50px',
                cursor: 'pointer',
              }}
            >
              <Link passHref href="/">
                <Typography sx={{ color: tab == 1 ? 'rgba(0, 171, 85, 1)' : '#000000' }}>
                  Events
                </Typography>
              </Link>
            </div>
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                borderBottom: tab == 2 ? '3px solid rgba(0, 171, 85, 1)' : '0px',
                color: '#000000',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            >
              <Link passHref href="/groups">
                <Typography sx={{ color: tab == 2 ? 'rgba(0, 171, 85, 1)' : '#000000' }}>
                  Groups
                </Typography>
              </Link>
            </div>
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                borderBottom: tab == 3 ? '3px solid rgba(0, 171, 85, 1)' : '0px',
                color: '#000000',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            >
              <Link passHref href="#">
                <Typography sx={{ color: tab == 3 ? 'rgba(0, 171, 85, 1)' : '#000000' }}>
                  Club Management
                </Typography>
              </Link>
            </div>
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
            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
          }}
          style={{
            padding: ' 2% 10% 3% 10%',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
          }}
        >
          <Stack direction="row" justifyContent="center" style={{ width: '100%' }}>
            <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
              <TextField
                fullWidth
                label=" "
                variant="standard"
                placeholder="Search for Keywords"
                style={{ borderRadius: '30px', overflow: 'hidden' }}
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="bx:bx-search" width={24} height={24} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
              <TextField
                variant="standard"
                fullWidth
                label="Enter Location"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </div>
            <div style={{ width: '28%', padding: '0 3%', borderRight: '1px solid #EEEEEE' }}>
              <TextField
                select
                fullWidth
                variant="standard"
                size="small"
                InputProps={{
                  disableUnderline: true,
                }}
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
                style={{ marginTop: '10px' }}
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
