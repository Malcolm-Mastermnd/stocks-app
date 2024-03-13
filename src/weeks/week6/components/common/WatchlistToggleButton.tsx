import { IconButton } from "@mui/material";
import EyeIcon from '@mui/icons-material/Visibility';
import EyeOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../context/redux/globalStore";
import { addToWatchList, removeFromWatchList } from "../../context/redux/useWatchListStore";
import { SymbolInfo } from "../../types/polygon.types";

interface WatchlistToggleButtonProps {
	stock: SymbolInfo;
}

function WatchlistToggleButton({
	stock,
}: WatchlistToggleButtonProps) {
	// Watchlist global state managed by redux
	const dispatch = useDispatch();
  const watchList = useSelector((state: RootState) => state.watchList.value);
	const isOnWatchList = !!watchList.find((watchListStock) => watchListStock.ticker === stock.ticker);
	
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		if (isOnWatchList) {
			dispatch(removeFromWatchList(stock))
		} else {
			dispatch(addToWatchList(stock))
		}
	}

	return (
    <IconButton onClick={handleClick}>
      {isOnWatchList ? <EyeIcon fontSize='large' /> : <EyeOutlinedIcon fontSize='large' />}
    </IconButton>
	)
}

export default WatchlistToggleButton;
