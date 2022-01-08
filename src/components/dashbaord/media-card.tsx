// @mui
import { styled } from '@mui/material/styles';
import { Link, Card, CardHeader, Container, Stack, Button } from '@mui/material'; // @types
// @types

// components
import Iconify from '../Iconify';

import Image from '../Image';
import _mock from 'src/_mock';

// ----------------------------------------------------------------------

const IconStyle = styled(Iconify)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// ----------------------------------------------------------------------

const imagesLightbox = [...Array(8)].map((_, index) => _mock.image.feed(index + 1));

export default function MediaCard() {
  const POSTS = [];

  return (
    <Card>
      <CardHeader title="Social" />
      <Container
        sx={{
          display: 'grid',
          gap: 1.5,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
          },
        }}
      >
        {imagesLightbox.map((img) => (
          <Image
            key={img}
            alt={img}
            src={img}
            ratio="1/1"
            sx={{
              borderRadius: 1,
              cursor: 'pointer',
            }}
          />
        ))}
      </Container>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        <Button
          style={{ marginTop: '20px', padding: '10px 20px' }}
          variant="outlined"
          target="_blank"
        >
          See All
        </Button>
      </div>
    </Card>
  );
}
