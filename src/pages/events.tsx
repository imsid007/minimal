// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import { Box, Container } from '@mui/material';
import { _userCards } from 'src/_mock';
import { UserCard } from 'src/sections/@dashboard/user/cards';
import useSettings from 'src/hooks/useSettings';
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  const { themeStretch } = useSettings();

  return (
    <Page title="The starting point for your next project">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
