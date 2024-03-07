import { Link, Typography } from '@mui/material';
import FlexXBox from '../../components/common/FlexXBox';
import FlexYBox from '../../components/common/FlexYBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../context/redux/globalStore';
import StockInformation from '../../components/StockInformation/StockInformation';
import { Link as RouterLink } from 'react-router-dom';

function WatchListPage() {
  // Watchlist global state managed by redux
  const watchList = useSelector((state: RootState) => state.watchList.value);

  return (
    <FlexYBox flexGrow={1} height='100%'>
      <FlexXBox justifyContent='center' mb={3}>
        <Typography variant='h3'>My Watch List</Typography>
      </FlexXBox>

      {watchList.length ? (
        <FlexYBox gap={4}>
          {watchList.map((stonk) => (
            <StockInformation key={stonk.symbol} stock={stonk} />
          ))}
        </FlexYBox>
      ): (
        <FlexYBox flexGrow={1} justifyContent='center' alignItems='center'>
          <Typography>You do not have any stocks on your watch list.</Typography>
          <Typography>
            To add a stock to your watch list, go to the
            &nbsp;
            <Link component={RouterLink} to='/week6/search'>Search Page</Link>
          </Typography>
        </FlexYBox>
      )}
    </FlexYBox>
  );
}

export default WatchListPage;
