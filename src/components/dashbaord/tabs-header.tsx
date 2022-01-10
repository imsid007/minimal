import isString from 'lodash/isString';
import { ReactNode } from 'react';
// @mui
import { Box, Typography, Link } from '@mui/material';
//

// import Breadcrumbs, { Props as BreadcrumbsProps } from './Breadcrumbs';

// ----------------------------------------------------------------------

// interface Props extends BreadcrumbsProps {
//   action?: ReactNode;
//   heading: string;
//   moreLink?: string | string[];
// }

interface Props {
  action?: ReactNode;
  heading: string;
  sx?: any;
}

export default function TabsHeader({
  //   links,
  action,
  heading,
  //   moreLink = '' || [],
  sx,
  ...other
}: Props) {
  return (
    <Box sx={{ mb: 1, ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          {/* <Breadcrumbs links={links} {...other} /> */}
        </Box>

        {action && <Box sx={{ flexShrink: 0, cursor: 'pointer' }}>{action}</Box>}
      </Box>
    </Box>
  );
}
