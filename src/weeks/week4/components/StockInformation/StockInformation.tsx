import BasicInfoCard from '../BasicInfoCard/BasicInfoCard';
import AdvancedInfoCards from '../AdvancedInfoCards/AdvancedInfoCards';
import FlexYBox from '../common/FlexYBox';

interface StockInformationProps {
  stockSymbol: string;
  companyName: string;
  isOnWatchList?: boolean;
  isFavorite?: boolean;
}

function StockInformation({
  stockSymbol,
  companyName,
  isOnWatchList,
  isFavorite,
}: StockInformationProps) {
  return (
    <FlexYBox width='100%'>
      <BasicInfoCard
        stockSymbol={stockSymbol}
        companyName={companyName}
        isOnWatchList={isOnWatchList}
        isFavorite={isFavorite}
      />
      <AdvancedInfoCards 
        stockSymbol={stockSymbol}
      />
    </FlexYBox>
  );
}

export default StockInformation;
