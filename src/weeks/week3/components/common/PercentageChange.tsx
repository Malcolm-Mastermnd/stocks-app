import { Typography } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FlexXBox from "../common/FlexXBox";

interface PercentaceChangeProps {
	percentage: number;
}

function PercentaceChange({
	percentage,
}: PercentaceChangeProps) {
	return (
    <FlexXBox sx={{ alignItems: 'center', gap: 1 }}>
      <Typography variant='h5'>{`${percentage > 0 ? '+' : ''} ${percentage}%`}</Typography>
      <ShowChartIcon
        sx={{
          color: percentage > 0 ? 'green' : 'red',
          transform: percentage < 0 ? 'rotate(90deg)' : 'rotate(0deg)',
        }}
      />
    </FlexXBox>
	)
}

export default PercentaceChange;
