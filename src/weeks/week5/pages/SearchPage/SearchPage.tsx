import SearchBox from '../../components/SearchBox/SearchBox';
import StockInformation from '../../components/StockInformation/StockInformation';
import FlexYBox from '../../components/common/FlexYBox';

function SearchPage() {
  return (
    <FlexYBox>
      <SearchBox order={4} excited={false} />
      <StockInformation stockSymbol='AAPL' companyName='Apple Inc.' isOnWatchList />
      <StockInformation stockSymbol='TSLA' companyName='Tesla Inc.' isOnWatchList isFavorite />
      <StockInformation stockSymbol='LULU' companyName='Lululemon Athletica Inc.' />
    </FlexYBox>
  );
}

export default SearchPage;
