import BasicInfoCard from '../BasicInfoCard/BasicInfoCard';
import AdvancedInfoCards from '../AdvancedInfoCards/AdvancedInfoCards';
import FlexYBox from '../common/FlexYBox';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import { Currency } from '../../types/types';
import FlexXBox from '../common/FlexXBox';

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
  const [currency, setCurrency] = useState<Currency>('USD');
  return (
    <FlexYBox width='100%' gap={2}>
      <FlexXBox justifyContent='flex-end'>
        <ToggleButtonGroup value={currency}>
          <ToggleButton value='USD' onClick={() => setCurrency('USD')}>$ USD</ToggleButton>
          <ToggleButton value='EUR' onClick={() => setCurrency('EUR')}>€ EUR</ToggleButton>
        </ToggleButtonGroup>
      </FlexXBox>
      <BasicInfoCard
        stockSymbol={stockSymbol}
        companyName={companyName}
        isOnWatchList={isOnWatchList}
        isFavorite={isFavorite}
        currency={currency}
      />
      <AdvancedInfoCards 
        stockSymbol={stockSymbol}
        currency={currency}
      />
    </FlexYBox>
  );
}

export default StockInformation;
