import { Box, Card, CircularProgress, Divider, IconButton, Typography } from "@mui/material";
import EyeIcon from '@mui/icons-material/Visibility';
import EyeOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FlexYBox from "../common/FlexYBox";
import PercentaceChange from "../common/PercentageChange";
import useAxios from "axios-hooks";
import { NewsResponse, TickerSnapshotResponse } from "../../types/polygon.types";
import { calculatePercentChange, formatMoney } from "../../utils/utils";
import FlexXBox from "../common/FlexXBox";
import { Currency } from "../../types/types";
import { useToggle } from "../../hooks/useToggle";

interface BasicInfoCardProps {
	stockSymbol: string;
	companyName: string;
	isOnWatchList?: boolean;
	isFavorite?: boolean;
	currency: Currency;
}

function BasicInfoCard({
	stockSymbol,
	companyName,
	isOnWatchList: initialIsOnWatchList = false,
	isFavorite: initialIsFavorite = false,
	currency,
}: BasicInfoCardProps) {
	const [isOnWatchList, handleWatchListClick] = useToggle(initialIsOnWatchList);
	const [isFavorite, handleFavoriteClick] = useToggle(initialIsFavorite);

  const [{
      data: snapshotData,
      loading: isSnapshotLoading,
      error: snapshotError,
  }] = useAxios<TickerSnapshotResponse>({
    url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v2/snapshot/locale/us/markets/stocks/tickers/${stockSymbol}`,
    params: {
      apiKey: import.meta.env.VITE_POLYGON_API_KEY,
    }
  });

  const [{
      data: newsData,
      loading: isNewsLoading,
      error: newsError,
  }] = useAxios<NewsResponse>({
    url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v2/reference/news`,
    params: {
      apiKey: import.meta.env.VITE_POLYGON_API_KEY,
      ticker: stockSymbol,
			limit: 1,
    }
  });

	const isLoading = (isSnapshotLoading || isNewsLoading) && (!snapshotData && !newsData);
	const isError = !!snapshotError || !!newsError;

	return (
		<Card sx={{ width: '100%' }} elevation={5}>
			<FlexYBox alignItems='center' p={2}>
				{/* Header */}
				<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<Typography variant='h4'>{stockSymbol}</Typography>
						<Divider orientation='vertical' sx={{ backgroundColor: 'white', mx: 2 }} />
						<Typography variant='h4'>{companyName}</Typography>
					</Box>
					<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
						<IconButton onClick={handleWatchListClick}>
							{isOnWatchList ? <EyeIcon fontSize='large' /> : <EyeOutlinedIcon fontSize='large' />}
						</IconButton>
						<IconButton onClick={handleFavoriteClick}>
							{isFavorite ? <StarIcon fontSize='large' /> : <StarBorderIcon fontSize='large' />}
						</IconButton>
					</Box>
				</Box>

				{/* Content */}
				<FlexXBox sx={{ alignItems: 'center', mt: 2, width: '100%', justifyContent: 'space-between' }}>
					{/* Loading */}
					{isLoading && (<CircularProgress />)}

					{/* Error */}
					{isError && (<Typography variant='h5'>Error fetching data</Typography>)}

					{snapshotData && newsData && !isLoading && !isError && (
						<>
							{/* Percentage change */}
							<PercentaceChange percentage={calculatePercentChange(snapshotData.ticker?.day?.o, snapshotData.ticker?.day?.c)} />
						
							{/* Prices */}
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
								<Typography variant='h5'>{formatMoney(snapshotData.ticker?.day?.c, currency)}</Typography>
								<Typography variant='subtitle1'>
									{`High ${formatMoney(snapshotData.ticker?.day?.h, currency)}
										Low: $${formatMoney(snapshotData.ticker?.day?.l, currency)}`}
								</Typography>
							</Box>
							
							{/* News */}
							<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20%' }}>
								<Typography variant='h5'>News</Typography>
								<Typography variant='subtitle1'>{newsData.results[0]?.description}</Typography>
							</Box>
						</>
					)}
				</FlexXBox>
			</FlexYBox>
		</Card>
	)
}

export default BasicInfoCard;
