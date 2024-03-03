import { Typography } from '@mui/material';
import StockInformation from '../../components/StockInformation/StockInformation';
import FlexXBox from '../../components/common/FlexXBox';
import FlexYBox from '../../components/common/FlexYBox';

function FavoritePage() {
  return (
    <FlexYBox>
      <FlexXBox justifyContent='center' mb={3}>
        <Typography variant='h3'>My Favorite Stock</Typography>
      </FlexXBox>
      <StockInformation stockSymbol='TSLA' companyName='Tesla Inc.' isOnWatchList isFavorite />
    </FlexYBox>
  );
}

export default FavoritePage;
