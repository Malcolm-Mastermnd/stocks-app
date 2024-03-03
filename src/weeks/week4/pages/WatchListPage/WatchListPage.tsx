import { Typography } from '@mui/material';
import StockInformation from '../../components/StockInformation/StockInformation';
import FlexXBox from '../../components/common/FlexXBox';
import FlexYBox from '../../components/common/FlexYBox';

function WatchListPage() {
  return (
    <FlexYBox>
      <FlexXBox justifyContent='center' mb={3}>
        <Typography variant='h3'>My Watch List</Typography>
      </FlexXBox>
      <StockInformation stockSymbol='AAPL' companyName='Apple Inc.' isOnWatchList />
      <StockInformation stockSymbol='TSLA' companyName='Tesla Inc.' isOnWatchList isFavorite />
    </FlexYBox>
  );
}

export default WatchListPage;
