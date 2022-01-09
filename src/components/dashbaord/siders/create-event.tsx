import {
  Button,
  Card,
  Drawer,
  Stack,
  Switch,
  MenuItem,
  TextField,
  Typography,
  SvgIcon,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React from 'react';
import { RHFUploadSingleFile } from 'src/components/hook-form';
import { styled } from '@mui/material/styles';
import { DatePicker } from '@mui/lab';
import TextIconLabel from 'src/components/TextIconLabel';
import Iconify from 'src/components/Iconify';

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: any;
}
const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function CreateEventDrawer({ isDrawerOpen, setIsDrawerOpen }: Props) {
  const options = ['Category', 'Player', 'Admin', 'Player'];

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Card sx={{ width: '50vw', height: '100%', overflow: 'scroll', padding: '40px 20px' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Add New Event</Typography>
          <div>
            <Switch defaultChecked />
          </div>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={3} direction="row">
            <TextField fullWidth multiline label="Full Name" />
            <TextField
              select
              fullWidth
              label="Select"
              value="Player"
              // onChange={handleChangeCurrency}
              helperText="Please select your currency"
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          <Stack spacing={3} direction="row">
            <DatePicker
              label="Start Date"
              //   value={value}
              //   onChange={(newValue) => {
              //     setValue(newValue);
              //   }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="End Date"
              //   value={value}
              //   onChange={(newValue) => {
              //     setValue(newValue);
              //   }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TextField fullWidth multiline label="Number Of Days" />
          </Stack>

          <TextField rows={5} fullWidth multiline label="Description" />
          <TextField fullWidth multiline label="Address" />
          <TextField
            select
            fullWidth
            label="Country"
            value="Country"
            // onChange={handleChangeCurrency}
            helperText="Please select your currency"
          >
            <MenuItem>Country</MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Role"
            value="Country"
            // onChange={handleChangeCurrency}
            helperText="Please select your currency"
          >
            <MenuItem>Country</MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <div>
            <TextField fullWidth multiline label="Documents to carry" />

            <TextIconLabel
              sx={{ mt: 1 }}
              icon={
                <SvgIcon color="action" style={{ width: '20px' }}>
                  <Iconify
                    sx={{ mr: '2', color: 'rgba(0, 171, 85, 1)' }}
                    icon={'ant-design:plus-circle-outlined'}
                    width={15}
                    height={15}
                  />
                </SvgIcon>
              }
              value={
                <div style={{ cursor: 'pointer' }} onClick={() => setIsDrawerOpen(true)}>
                  <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                    Add More
                  </Typography>
                </div>
              }
            />
          </div>
          <div>
            <TextField fullWidth multiline label="Description" />

            <TextIconLabel
              sx={{ mt: 1 }}
              icon={
                <SvgIcon color="action" style={{ width: '20px' }}>
                  <Iconify
                    sx={{ mr: '2', color: 'rgba(0, 171, 85, 1)' }}
                    icon={'ant-design:plus-circle-outlined'}
                    width={15}
                    height={15}
                  />
                </SvgIcon>
              }
              value={
                <div style={{ cursor: 'pointer' }} onClick={() => setIsDrawerOpen(true)}>
                  <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                    Add More
                  </Typography>
                </div>
              }
            />
          </div>

          <div>
            <LabelStyle>Cover</LabelStyle>
            <RHFUploadSingleFile name="cover" accept="image/*" maxSize={3145728} />
          </div>

          <TextIconLabel
            sx={{ mt: 1 }}
            icon={<Switch defaultChecked />}
            value={
              <div style={{ cursor: 'pointer' }} onClick={() => setIsDrawerOpen(true)}>
                <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                  Allow disallow share and comment on event
                </Typography>
              </div>
            }
          />
          <TextIconLabel
            sx={{ mt: 1 }}
            icon={<Switch defaultChecked />}
            value={
              <div style={{ cursor: 'pointer' }} onClick={() => setIsDrawerOpen(true)}>
                <Typography sx={{ ml: 1, color: 'rgba(0, 171, 85, 1)' }} variant="h6">
                  Mark event as paid or free
                </Typography>
              </div>
            }
          />

          <TextField fullWidth multiline label="Enter Amount" />

          <RadioGroup row defaultValue="g">
            <FormControlLabel value="g" control={<Radio />} label="Online Payment" />
            <FormControlLabel value="p" control={<Radio size="small" />} label="Offline Payment" />
          </RadioGroup>

          <TextField rows={3} fullWidth multiline label="Payment description" />

          <Stack direction="row" justifyContent="flex-end">
            <div>
              <Button color="inherit" variant="outlined" size="large">
                Cancel
              </Button>
              <Button sx={{ ml: 1 }} variant="contained" size="large">
                Add
              </Button>
            </div>
          </Stack>
        </Stack>
      </Card>
    </Drawer>
  );
}
