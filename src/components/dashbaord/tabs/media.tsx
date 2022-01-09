import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, IconButton, Typography, CardContent, SvgIcon } from '@mui/material';
// utils

import { fDate } from 'src/utils/formatTime';
import cssStyles from 'src/utils/cssStyles';
// @types
import { Gallery } from 'src/@types/user';
// components
import Image from 'src/components/Image';
import Iconify from 'src/components/Iconify';
import LightboxModal from 'src/components/LightboxModal';
import TextIconLabel from 'src/components/TextIconLabel';
import TabsHeader from '../tabs-header';
import CreateAlbumDrawer from '../siders/create-album';

// ----------------------------------------------------------------------

const CaptionStyle = styled(CardContent)(({ theme }) => ({
  ...cssStyles().bgBlur({ blur: 2, color: theme.palette.grey[900] }),
  bottom: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  justifyContent: 'space-between',
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

type Props = {
  gallery: Gallery[];
  isSelf: boolean;
};

export default function Media({ gallery, isSelf }: Props) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const imagesLightbox = gallery.map((img) => img.imageUrl);

  const handleOpenLightbox = (url: string) => {
    const selectedImage = imagesLightbox.findIndex((index) => index === url);
    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };
  return (
    <Box sx={{ mt: 5 }}>
      <TabsHeader
        heading="Media"
        action={
          isSelf ? (
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
                    Create Album
                  </Typography>
                </div>
              }
            />
          ) : null
        }
      />

      <Card sx={{ p: 3 }}>
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
          {gallery.map((image) => (
            <GalleryItem key={image.id} image={image} onOpenLightbox={handleOpenLightbox} />
          ))}
        </Box>

        <LightboxModal
          images={imagesLightbox}
          mainSrc={imagesLightbox[selectedImage]}
          photoIndex={selectedImage}
          setPhotoIndex={setSelectedImage}
          isOpen={openLightbox}
          onCloseRequest={() => setOpenLightbox(false)}
        />
        <CreateAlbumDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      </Card>
    </Box>
  );
}

// ----------------------------------------------------------------------

type GalleryItemProps = {
  image: Gallery;
  onOpenLightbox: (value: string) => void;
};

function GalleryItem({ image, onOpenLightbox }: GalleryItemProps) {
  const { imageUrl, title, postAt } = image;

  return (
    <Card sx={{ cursor: 'pointer', position: 'relative' }}>
      <Image
        alt="gallery image"
        ratio="1/1"
        src={imageUrl}
        onClick={() => onOpenLightbox(imageUrl)}
      />

      <CaptionStyle>
        <div>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" sx={{ opacity: 0.72 }}>
            {fDate(postAt)}
          </Typography>
        </div>
        <IconButton color="inherit">
          <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
        </IconButton>
      </CaptionStyle>
    </Card>
  );
}
