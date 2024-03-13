import { IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useFavoriteStore } from "../../context/zustand/useFavoriteStore";
import { SymbolInfo } from "../../types/polygon.types";

interface FavoriteToggleButtonProps {
	stock: SymbolInfo;
}

function FavoriteToggleButton({
	stock,
}: FavoriteToggleButtonProps) {
	// Favorite global state managed by zustand
	const { favorite, setFavorite } = useFavoriteStore();
	const isFavorite = favorite?.ticker === stock.ticker;
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		if (isFavorite) {
			setFavorite(undefined);
		} else {
			setFavorite(stock)
		}
	}

	return (
    <IconButton onClick={handleClick}>
      {isFavorite ? <StarIcon fontSize='large' /> : <StarBorderIcon fontSize='large' />}
    </IconButton>
	)
}

export default FavoriteToggleButton;
