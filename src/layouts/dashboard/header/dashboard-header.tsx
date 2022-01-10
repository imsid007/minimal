// @mui
import { styled } from '@mui/material/styles';
import {
  Button,
  Stack,
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  Typography,
} from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER } from '../../../config';
// components
import Logo from '../../../components/Logo';

import Iconify from 'src/components/Iconify';

import AccountPopover from './AccountPopover';

import NotificationsPopover from './NotificationsPopover';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { m } from 'framer-motion';

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

const menu = [
  { id: 1, title: 'Events', url: '/' },
  { id: 2, title: 'Groups', url: '/groups' },
  { id: 3, title: 'Club Management', url: '#' },
];

export default function DashboardHeaderV2({
  onOpenSidebar,
  isCollapse = true,
  verticalLayout = false,
  filter = false,
  tab,
}: Props) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const isDesktop = useResponsive('up', 'lg');

  const [isShowMenu, setIsShowMenu] = useState(true);

  let lastScrollTop = 0;

  function handleScroll() {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY < 250) setIsShowMenu(true);
    else {
      if (scrollY > lastScrollTop) {
        setIsShowMenu(false);
      } else {
        setIsShowMenu(true);
      }
      lastScrollTop = scrollY <= 0 ? 0 : scrollY;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

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
          zIndex: 999,
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
          {isDesktop ? (
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
              {menu.map((menu) => (
                <div
                  key={menu.id}
                  style={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: tab == menu.id ? '3px solid rgba(0, 171, 85, 1)' : '0px',
                    color: '#000000',
                    marginLeft: '50px',
                    cursor: 'pointer',
                  }}
                >
                  <Link passHref href={menu.url}>
                    <Typography sx={{ color: tab == menu.id ? 'rgba(0, 171, 85, 1)' : '#000000' }}>
                      {menu.title}
                    </Typography>
                  </Link>
                </div>
              ))}
            </Stack>
          ) : null}

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
      {filter && isDesktop ? (
        <m.Toolbar
          animate={{ opacity: isShowMenu ? 1 : 0, y: isShowMenu ? 0 : -100 }}
          transition={{ duration: '0.8', delay: 0.3, ease: 'easeOut' }}
          style={{
            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.05)',
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
        </m.Toolbar>
      ) : // </m.div>
      null}
    </RootStyle>
  );
}
