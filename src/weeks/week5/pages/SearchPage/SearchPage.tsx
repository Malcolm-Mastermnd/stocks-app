import SearchBox from '../../components/SearchBox/SearchBox';
import StockInformation from '../../components/StockInformation/StockInformation';
import FlexYBox from '../../components/common/FlexYBox';

function SearchPage() {
  return (
    <FlexYBox>
      <SearchBox order={4} excited={false} />
      <StockInformation stock={{ symbol: 'AAPL', companyName: 'Apple Inc.' }} />
      <StockInformation stock={{ symbol: 'TSLA', companyName: 'Tesla Inc.' }} />
      <StockInformation stock={{ symbol: 'LULU', companyName: 'Lululemon Athletica Inc.' }} />
    </FlexYBox>
  );
}

export default SearchPage;
