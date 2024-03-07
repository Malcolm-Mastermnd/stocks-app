import BasicInfoCard from '../BasicInfoCard/BasicInfoCard';
import AdvancedInfoCards from '../AdvancedInfoCards/AdvancedInfoCards';
import FlexYBox from '../common/FlexYBox';
import { Stonk } from '../../types/types';

interface StockInformationProps {
  stock: Stonk;
}

function StockInformation({
  stock,
}: StockInformationProps) {
  return (
    <FlexYBox width='100%' gap={2}>
      <BasicInfoCard stock={stock} />
      <AdvancedInfoCards stock={stock} />
    </FlexYBox>
  );
}

export default StockInformation;
