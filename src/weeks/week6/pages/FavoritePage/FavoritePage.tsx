import { Link, Typography } from '@mui/material';
import StockInformation from '../../components/StockInformation/StockInformation';
import FlexXBox from '../../components/common/FlexXBox';
import FlexYBox from '../../components/common/FlexYBox';
import { useFavoriteStore } from '../../context/zustand/useFavoriteStore';
import { Link as RouterLink } from 'react-router-dom';

function FavoritePage() {
  // Favorite global state managed by zustand
  const { favorite } = useFavoriteStore();
  return (
    <FlexYBox height='100%'>
      <FlexXBox justifyContent='center' mb={3}>
        <Typography variant='h3'>My Favorite Stock</Typography>
      </FlexXBox>

      {favorite ? (
        <StockInformation stock={favorite} initialShowAdvancedInfo={true} />
      ) : (
        <FlexYBox flexGrow={1} justifyContent='center' alignItems='center'>
          <Typography>You do not currently have a favorite stock.</Typography>
          <Typography>
            Set your favorite stock on the
            &nbsp;
            <Link component={RouterLink} to='/week6/search'>Search Page</Link>
          </Typography>
        </FlexYBox>
      )}
    </FlexYBox>
  );
}

export default FavoritePage;
