import BasicInfoCard from '../BasicInfoCard/BasicInfoCard';
import AdvancedInfoCards from '../AdvancedInfoCards/AdvancedInfoCards';
import FlexYBox from '../common/FlexYBox';
import { SymbolInfo } from '../../types/polygon.types';
import { useToggle } from '../../hooks/useToggle';

interface StockInformationProps {
  stock: SymbolInfo;
  initialShowAdvancedInfo: boolean;
}

function StockInformation({
  stock,
  initialShowAdvancedInfo,
}: StockInformationProps) {
  const [showAdvancedInfo, toggleShowAdvancedInfo] = useToggle(initialShowAdvancedInfo);

  return (
    <FlexYBox width='100%' gap={2}>
      <BasicInfoCard
        stock={stock}
        isShowingAdvancedInfo={showAdvancedInfo}
        onToggleClick={toggleShowAdvancedInfo}
      />
      {showAdvancedInfo && (
        <AdvancedInfoCards stock={stock} />
      )}
    </FlexYBox>
  );
}

export default StockInformation;
