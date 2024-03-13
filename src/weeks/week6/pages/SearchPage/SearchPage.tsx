import { useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import StockInformation from '../../components/StockInformation/StockInformation';
import FlexYBox from '../../components/common/FlexYBox';
import { SymbolInfo } from '../../types/polygon.types';

function SearchPage() {
  const [selectedStock, setSelectedStock] = useState<SymbolInfo>();

  return (
    <FlexYBox gap={3}>
      <SearchBox onStockSelect={setSelectedStock} />
      {selectedStock && (
        <StockInformation stock={selectedStock} initialShowAdvancedInfo={true} />
      )}
    </FlexYBox>
  );
}

export default SearchPage;
