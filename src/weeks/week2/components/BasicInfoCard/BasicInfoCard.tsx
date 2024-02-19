import { Box, Card, Divider, Typography } from "@mui/material";
import EyeIcon from '@mui/icons-material/Visibility';
import EyeOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FlexYBox from "../common/FlexYBox";
import PercentaceChange from "../common/PercentageChange";

interface BasicInfoCardProps {
	stockSymbol: string;
	companyName: string;
	isOnWatchList?: boolean;
	isFavorite?: boolean;
	dayPercentChange: number;
	currentPrice: number;
	dayHigh: number;
	dayLow: number;
	newsStory?: string;
}

function BasicInfoCard({
	stockSymbol,
	companyName,
	isOnWatchList,
	isFavorite,
	dayPercentChange,
	currentPrice,
	dayHigh,
	dayLow,
	newsStory = '',
}: BasicInfoCardProps) {
	return (
		<Card sx={{ width: '100%', mb: 2 }} elevation={5}>
			<FlexYBox alignItems='center' p={2}>
				{/* Header */}
				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<Typography variant='h4'>{stockSymbol}</Typography>
						<Divider orientation='vertical' sx={{ backgroundColor: 'white', mx: 2 }} />
						<Typography variant='h4'>{companyName}</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
						{isOnWatchList ? <EyeIcon fontSize='large' /> : <EyeOutlinedIcon fontSize='large' />}
						{isFavorite ? <StarIcon fontSize='large' /> : <StarBorderIcon fontSize='large' />}
					</Box>
				</Box>

				{/* Content */}
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2, width: '100%', justifyContent: 'space-between' }}>
					{/* Percentage change */}
					<PercentaceChange percentage={dayPercentChange} />
				
					{/* Prices */}
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<Typography variant='h5'>{`$${currentPrice}`}</Typography>
						<Typography variant='subtitle1'>{`High $${dayHigh} Low: $${dayLow}`}</Typography>
					</Box>
					
					{/* News */}
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20%' }}>
						<Typography variant='h5'>News</Typography>
						<Typography variant='subtitle1'>{newsStory}</Typography>
					</Box>
				</Box>
			</FlexYBox>
		</Card>
	)
}

export default BasicInfoCard;
