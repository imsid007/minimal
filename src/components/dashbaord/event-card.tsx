import { paramCase } from 'change-case';
// next
import NextLink from 'next/link';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Avatar, Typography, CardContent, Link, Stack } from '@mui/material';
// routes

import { PATH_DASHBOARD } from 'src/routes/paths';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// utils
import { fDate } from 'src/utils/formatTime';
import { fShortenNumber } from 'src/utils/formatNumber';
// @types
import { Post } from 'src/@types/blog';
// components
import Image from 'src/components/Image';
import Iconify from 'src/components/Iconify';
import TextMaxLine from 'src/components/TextMaxLine';
import SvgIconStyle from 'src/components/SvgIconStyle';
import TextIconLabel from 'src/components/TextIconLabel';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.8),
}));

// ----------------------------------------------------------------------

type Props = {
  post: Post;
  index?: number;
};

export default function EventCard({ post, index }: Props) {
  const isDesktop = useResponsive('up', 'md');

  const { cover, title, view, comment, share, author, createdAt } = post;

  const latestPost = index === 0 || index === 1 || index === 2;

  return (
    <Card>
      {/* <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            zIndex: 9,
            top: 24,
            left: 24,
            width: 40,
            height: 40,
            position: 'absolute',
          }}
        /> */}
      <PostContent
        title={title}
        view={view}
        comment={comment}
        share={share}
        createdAt={createdAt}
        index={index}
      />
      <OverlayStyle />
      <Image alt="cover" src={cover} sx={{ height: 360 }} />
    </Card>
  );
}

// ----------------------------------------------------------------------

type PostContentProps = {
  title: string;
  view: number;
  comment: number;
  share: number;
  createdAt: Date | string | number;
  index?: number;
};

export function PostContent({ title, view, comment, share, createdAt, index }: PostContentProps) {
  const isDesktop = useResponsive('up', 'md');

  const linkTo = `${PATH_DASHBOARD.blog.root}/post/${paramCase(title)}`;

  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;

  const POST_INFO = [
    { number: comment, icon: 'eva:message-circle-fill' },
    { number: view, icon: 'eva:eye-fill' },
    { number: share, icon: 'eva:share-fill' },
  ];

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        pt: 0,
        zIndex: 9,
        bottom: 0,
        position: 'absolute',
        color: 'common.white',
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {fDate(createdAt)}
      </Typography>

      <NextLink href={linkTo} passHref>
        <Link color="inherit">
          <TextMaxLine
            variant={isDesktop && latestPostLarge ? 'h5' : 'subtitle2'}
            line={2}
            persistent
          >
            {title}
          </TextMaxLine>
        </Link>
      </NextLink>

      <Stack
        flexWrap="wrap"
        direction="row"
        sx={{
          mt: 3,
          color: 'text.disabled',
          ...((latestPostLarge || latestPostSmall) && {
            opacity: 0.64,
            color: 'common.white',
          }),
        }}
      >
        {POST_INFO.map((info, index) => (
          <TextIconLabel
            key={index}
            icon={<Iconify icon={info.icon} sx={{ width: 16, height: 16, mr: 0.5 }} />}
            value={fShortenNumber(info.number)}
            sx={{ typography: 'caption', ml: index === 0 ? 0 : 1.5 }}
          />
        ))}
      </Stack>
    </CardContent>
  );
}
