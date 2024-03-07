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
import { useContext } from "react";
import { UserPreferencesContext } from "../../context/react-context/UserPreferences";
import { useFavoriteStore } from "../../context/zustand/useFavoriteStore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/redux/globalStore";
import { addToWatchList, removeFromWatchList } from "../../context/redux/useWatchListStore";
import { Stonk } from "../../types/types";

interface BasicInfoCardProps {
	stock: Stonk;
}

function BasicInfoCard({
	stock,
}: BasicInfoCardProps) {
	// Context managed by react
	const { currency } = useContext(UserPreferencesContext);

	// Favorite global state managed by zustand
	const { favorite, setFavorite } = useFavoriteStore();
	const isFavorite = favorite?.symbol === stock.symbol;
	const handleFavoriteClick = () => {
		if (isFavorite) {
			setFavorite(undefined);
		} else {
			setFavorite(stock)
		}
	}

	// Watchlist global state managed by redux
	const dispatch = useDispatch();
  const watchList = useSelector((state: RootState) => state.watchList.value);
	const isOnWatchList = !!watchList.find((watchListStock) => watchListStock.symbol === stock.symbol);
	const handleWatchListClick = () => {
		if (isOnWatchList) {
			dispatch(removeFromWatchList(stock))
		} else {
			dispatch(addToWatchList(stock))
		}
	}

  const [{
      data: snapshotData,
      loading: isSnapshotLoading,
      error: snapshotError,
  }] = useAxios<TickerSnapshotResponse>({
    url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v2/snapshot/locale/us/markets/stocks/tickers/${stock.symbol}`,
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
      ticker: stock.symbol,
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
						<Typography variant='h4'>{stock.symbol}</Typography>
						<Divider orientation='vertical' sx={{ backgroundColor: 'white', mx: 2 }} />
						<Typography variant='h4'>{stock.companyName}</Typography>
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
							<Box width='33%'>
								<PercentaceChange percentage={calculatePercentChange(snapshotData.ticker?.day?.o, snapshotData.ticker?.day?.c)} />
							</Box>
						
							{/* Prices */}
							<FlexYBox alignItems='center' width='34%'>
								<Typography variant='h5'>{formatMoney(snapshotData.ticker?.day?.c, currency)}</Typography>
								<Typography variant='subtitle1'>
									{`High ${formatMoney(snapshotData.ticker?.day?.h, currency)}
										Low: $${formatMoney(snapshotData.ticker?.day?.l, currency)}`}
								</Typography>
							</FlexYBox>
							
							{/* News */}
							<FlexYBox alignItems='center' width='33%' maxHeight='150px'>
								<Typography variant='h5'>News</Typography>
								<Typography 
									sx={{
										display: '-webkit-box',
										WebkitLineClamp: 4,
										WebkitBoxOrient: 'vertical',  
										overflow: 'hidden',
										textOverflow: 'ellipsis',
									}}
								>
									{newsData.results[0]?.description}
								</Typography>
							</FlexYBox>
						</>
					)}
				</FlexXBox>
			</FlexYBox>
		</Card>
	)
}

export default BasicInfoCard;
