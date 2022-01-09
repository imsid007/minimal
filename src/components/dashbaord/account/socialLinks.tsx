import Page from 'src/components/Page';
import { Container } from '@mui/material';
import Layout from 'src/layouts';
import { useSnackbar } from 'notistack';
import useSettings from 'src/hooks/useSettings';
// form
import { useForm } from 'react-hook-form';
// @mui
import { Stack, Card, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// @typesi
import { Profile } from 'src/@types/user';
// components
import Iconify from 'src/components/Iconify';

import { FormProvider, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const SOCIAL_LINKS = [
  {
    value: 'facebookLink',
    icon: <Iconify icon={'eva:facebook-fill'} width={24} height={24} />,
  },
  {
    value: 'instagramLink',
    icon: <Iconify icon={'ant-design:instagram-filled'} width={24} height={24} />,
  },
  {
    value: 'linkedinLink',
    icon: <Iconify icon={'eva:linkedin-fill'} width={24} height={24} />,
  },
  {
    value: 'twitterLink',
    icon: <Iconify icon={'eva:twitter-fill'} width={24} height={24} />,
  },
] as const;

// ----------------------------------------------------------------------

type FormValuesProps = {
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
  twitterLink: string;
};

type Props = {
  myProfile: Profile;
};

SocialLinks.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};

export default function SocialLinks({ myProfile }: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const defaultValues = {
    facebookLink: myProfile.facebookLink,
    instagramLink: myProfile.instagramLink,
    linkedinLink: myProfile.linkedinLink,
    twitterLink: myProfile.twitterLink,
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Page title="User: Account" sx={{ mb: 4 }}>
      <Container sx={{ mt: 0 }} maxWidth={themeStretch ? false : 'lg'}>
        <Card sx={{ p: 3 }}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} alignItems="flex-end">
              {SOCIAL_LINKS.map((link) => (
                <RHFTextField
                  key={link.value}
                  name={link.value}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">{link.icon}</InputAdornment>,
                  }}
                />
              ))}

              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Card>
      </Container>
    </Page>
  );
}
