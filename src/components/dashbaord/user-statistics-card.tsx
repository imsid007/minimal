import { CardHeader, Container, Grid } from '@mui/material';
import { AnalyticsWidgetSummary } from 'src/sections/@dashboard/general/analytics';
import UserStatCard from './user-stat-card';
import userStatCard from './user-stat-card';

export default function UserStatisticsCard({ isSeeAll, cardHeader }: Props) {
  return (
    <div>
      <CardHeader sx={{ mb: 1 }} title="User Statistics" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <UserStatCard title="Users" total={820000} color="info" icon={'bx:bxs-user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <UserStatCard title="Clubs" total={7200} color="warning" icon={'fa-solid:hotel'} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <UserStatCard title="Events" total={6200} color="error" icon={'fontisto:date'} />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <UserStatCard title="Impression" total={4500} icon={'bx:bxs-like'} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
