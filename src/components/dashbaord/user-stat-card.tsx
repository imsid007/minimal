// @mui
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from 'src/utils/formatNumber';

// theme
import { ColorSchema } from 'src/theme/palette';

// components
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

type Props = {
  title: string;
  total: number;
  icon: string;
  color?: ColorSchema;
};

export default function UserStatCard({ title, total, icon, color = 'primary' }: Props) {
  return (
    <RootStyle
      sx={{
        // color: (theme) => theme.palette[color].darker,
        // bgcolor: (theme) => theme.palette[color].lighter,
        border: '1px solid #DCDCDC',
      }}
    >
      <IconWrapperStyle
        sx={{
          color: 'rgba(99, 115, 129, 1)',
        }}
      >
        <Iconify icon={icon} width={40} height={40} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(total)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </RootStyle>
  );
}
