import { Card, Typography } from '@mui/material';
import FlexXBox from '../common/FlexXBox';
import PercentaceChange from '../common/PercentageChange';
import { formatLargeMoney } from '../../utils/utils';

interface AdvancedInfoCardsProps {
  weekPercentChange: number;
  monthPercentChange: number;
  yearPercentChange: number;
  dividendYield?: number;
  earningsPerShare: number;
  marketCap: number;
}

function AdvancedInfoCards({
  weekPercentChange,
  monthPercentChange,
  yearPercentChange,
  dividendYield,
  earningsPerShare,
  marketCap,
}: AdvancedInfoCardsProps) {
  return (
    <FlexXBox width='100%' gap={2}>

      {/* Percentages Card */}
      <Card sx={{ width: '100%', mb: 2, p: 2 }} elevation={5}>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Last Week</Typography>
          <PercentaceChange percentage={weekPercentChange} />
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Last Month</Typography>
          <PercentaceChange percentage={monthPercentChange} />
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Last Year</Typography>
          <PercentaceChange percentage={yearPercentChange} />
        </FlexXBox>
      </Card>

      {/* Extra Info Card */}
      <Card sx={{ width: '100%', mb: 2, p: 2 }} elevation={5}>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Dividend Yield</Typography>
          <Typography variant='h6'>{dividendYield ? `${dividendYield}%` : 'N/A'}</Typography>
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Earnings Per Share</Typography>
          <Typography variant='h6'>{`$${earningsPerShare}`}</Typography>
        </FlexXBox>
        <FlexXBox justifyContent='space-between'>
          <Typography variant='h6'>Market Cap</Typography>
          <Typography variant='h6'>{formatLargeMoney(marketCap)}</Typography>
        </FlexXBox>
      </Card>

    </FlexXBox>
  );
}

export default AdvancedInfoCards;
