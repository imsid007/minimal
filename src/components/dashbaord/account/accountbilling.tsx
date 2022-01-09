// @mui
import { Box, Card, Button, Typography, Stack, Paper, TextField } from '@mui/material';
// @types

import { UserAddressBook } from 'src/@types/user';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  addressBook: UserAddressBook[];
};

export default function AccountBillingAddressBook({ addressBook }: Props) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="overline" sx={{ color: 'text.secondary' }}>
          Billing Info
        </Typography>

        {addressBook?.map((address) => (
          <Paper
            key={address.id}
            sx={{
              p: 3,
              width: 1,
              bgcolor: 'background.neutral',
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {address.name}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                Address: &nbsp;
              </Typography>
              {`${address.street}, ${address.city}, ${address.state}, ${address.country} ${address.zipCode}`}
            </Typography>

            <Typography variant="body2" gutterBottom>
              <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
                Phone: &nbsp;
              </Typography>
              {address.phone}
            </Typography>

            <Box sx={{ mt: 1 }}>
              <Button
                color="error"
                size="small"
                startIcon={<Iconify icon={'eva:trash-2-outline'} />}
                onClick={() => {}}
                sx={{ mr: 1 }}
              >
                Delete
              </Button>
              <Button
                size="small"
                startIcon={<Iconify icon={'eva:edit-fill'} />}
                onClick={() => {}}
              >
                Edit
              </Button>
            </Box>
          </Paper>
        ))}

        <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />}>
          Add new address
        </Button>
        <Paper
          sx={{
            p: 3,
            width: 1,
            bgcolor: 'background.neutral',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              columnGap: 2,
              rowGap: 3,
              gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
            }}
          >
            <TextField fullWidth multiline label="Name" />
            <TextField fullWidth multiline label="Relation" />
            <TextField fullWidth multiline label="Contact Number 1" />
            <TextField fullWidth multiline label="Contact Number 2" />
          </Box>
        </Paper>
      </Stack>
      <Stack sx={{ mt: 3 }} direction="row" justifyContent="flex-end">
        <div>
          <Button color="inherit" variant="outlined" size="large">
            Cancel
          </Button>
          <Button sx={{ ml: 1 }} variant="contained" size="large">
            Save Changes
          </Button>
        </div>
      </Stack>
    </Card>
  );
}
