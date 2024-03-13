import {
  Autocomplete,
  CircularProgress,
  ListItem,
  ListItemText,
  TextField,
  debounce,
} from '@mui/material';
import useAxios from 'axios-hooks';
import React, { useEffect, useMemo } from 'react';
import { SymbolInfo, SymbolSearchResponse } from '../../types/polygon.types';
import SearchIcon from '@mui/icons-material/Search';
import FlexXBox from '../common/FlexXBox';
import WatchlistToggleButton from '../common/WatchlistToggleButton';
import FavoriteToggleButton from '../common/FavoriteToggleButton';

interface SearchBoxProps {
  onStockSelect: (stock?: SymbolInfo) => void;
}

function SearchBox({
  onStockSelect,
}: SearchBoxProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const [{ data, loading, error }, refetch] = useAxios<SymbolSearchResponse>(
    {
      url: `${import.meta.env.VITE_POLYGON_API_BASE_URL}/v3/reference/tickers`,
      params: {
        apiKey: import.meta.env.VITE_POLYGON_API_KEY,
        search: searchQuery,
        market: 'stocks',
      }
    },
    {
      manual: true,
    }
  );

  const debouncedRefetch = useMemo(() => debounce(() => {
    if (searchQuery && searchQuery.length > 2) {
      refetch();
    }
  }, 500), [searchQuery, refetch]);
  
  useEffect(() => {
    debouncedRefetch();
  }, [searchQuery, debouncedRefetch]);

  return (
    <Autocomplete<SymbolInfo>
      id='stock-search'
      isOptionEqualToValue={(stock, value) => stock.ticker === value.ticker}
      getOptionLabel={(stock) => stock.ticker}
      options={data?.results || []}
      loading={loading}
      onInputChange={(_, value) => { setSearchQuery(value) }}
      onChange={(_, stock) => { onStockSelect(stock || undefined) }}
      filterOptions={(options) => options}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search for a stock...'
          helperText={error ? 'Error fetching cities' : ''}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                <SearchIcon />
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(props, stock) => (
        <ListItem key={stock.ticker} {...props}>
          <ListItemText primary={stock.ticker} secondary={stock.name} />
          <FlexXBox flexGrow={1} />
          <FlexXBox>
            <WatchlistToggleButton stock={stock} />
            <FavoriteToggleButton stock={stock} />
          </FlexXBox>

        </ListItem>
      )}
    />
  );
}

export default SearchBox;
