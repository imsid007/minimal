import { useSnackbar } from 'notistack';
// form
import { useForm } from 'react-hook-form';
// @mui
import { Card, Stack, Typography, Container, Switch } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { FormProvider } from 'src/components/hook-form';

import useSettings from 'src/hooks/useSettings';

// ----------------------------------------------------------------------

const ACTIVITY_OPTIONS = [
  {
    value: 'activityComments',
    label: 'Comanna comments on my avont',
  },
  {
    value: 'activityAnswers',
    label: 'Someone comments on my news',
  },
  { value: 'activityFollows', label: 'Someone follows me' },
] as const;

const APPLICATION_OPTIONS = [
  { value: 'applicationNews', label: 'News and announcements' },
  { value: 'applicationProduct', label: 'Weekly product updates' },
  { value: 'applicationBlog', label: 'Weekly blog digest' },
] as const;

const CLUBS_ACTIVITY = [
  { value: 'applicationNews', label: 'Event is created' },
  { value: 'applicationProduct', label: 'News is published' },
  { value: 'applicationBlog', label: 'Album is created' },
] as const;

const NOTIFICATION_SETTINGS = {
  activityComments: true,
  activityAnswers: true,
  activityFollows: false,
  applicationNews: true,
  applicationProduct: false,
  applicationBlog: false,
};

// ----------------------------------------------------------------------

type FormValuesProps = {
  activityComments: boolean;
  activityAnswers: boolean;
  activityFollows: boolean;
  applicationNews: boolean;
  applicationProduct: boolean;
  applicationBlog: boolean;
};

export default function Notifications() {
  const { enqueueSnackbar } = useSnackbar();
  const { themeStretch } = useSettings();

  const defaultValues = {
    activityComments: NOTIFICATION_SETTINGS.activityComments,
    activityAnswers: NOTIFICATION_SETTINGS.activityAnswers,
    activityFollows: NOTIFICATION_SETTINGS.activityFollows,
    applicationNews: NOTIFICATION_SETTINGS.applicationNews,
    applicationProduct: NOTIFICATION_SETTINGS.applicationProduct,
    applicationBlog: NOTIFICATION_SETTINGS.applicationBlog,
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
    <Container sx={{ mt: 1, mb: 4 }} maxWidth={themeStretch ? false : 'lg'}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Card sx={{ p: 3, mb: 2 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <div>
              <Typography variant="h6">Activity</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                If you wish to stop all notifications turn this off. You can change this anytime
              </Typography>
            </div>
            <Switch defaultChecked />
          </Stack>
        </Card>

        <Stack spacing={2} direction="row" alignItems="center">
          <Card sx={{ p: 2, width: 1 }}>
            <Stack spacing={2} sx={{}}>
              <Typography variant="h6">Activity</Typography>
              <Typography variant="body2">Sand me email when</Typography>

              <Stack spacing={1}>
                {ACTIVITY_OPTIONS.map((activity) => (
                  <Stack key={activity.value} direction="row" justifyContent="space-between">
                    <Typography sx={{ color: 'text.secondary' }} variant="body2">
                      {activity.label}
                    </Typography>
                    <Switch defaultChecked />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Card>
          <Card sx={{ p: 2, width: 1 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Clubs Activitv</Typography>
              <Typography variant="body2">Send me email when activitv in following clut</Typography>
              <Stack spacing={1}>
                {CLUBS_ACTIVITY.map((activity) => (
                  <Stack key={activity.value} direction="row" justifyContent="space-between">
                    <Typography sx={{ color: 'text.secondary' }} variant="body2">
                      {activity.label}
                    </Typography>
                    <Switch defaultChecked />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Card>

          <Card sx={{ p: 2, width: 1 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Application</Typography>
              <Typography variant="body2">Send me email for</Typography>
              <Stack spacing={1}>
                {APPLICATION_OPTIONS.map((activity) => (
                  <Stack key={activity.value} direction="row" justifyContent="space-between">
                    <Typography sx={{ color: 'text.secondary' }} variant="body2">
                      {activity.label}
                    </Typography>
                    <Switch defaultChecked />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Card>

          {/* <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Save Changes
            </LoadingButton> */}
        </Stack>
      </FormProvider>
    </Container>
  );
}
