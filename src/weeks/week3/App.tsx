import WeekSelect from '../../components/WeekSelect/WeekSelect';
import SideNav from './components/SideNav/SideNav';
import SearchBox from './components/SearchBox/SearchBox';
import theme from './theme/theme';
import { Box, ThemeProvider } from '@mui/material';
import StockInformation from './components/StockInformation/StockInformation';
import FlexYBox from './components/common/FlexYBox';
import FlexXBox from './components/common/FlexXBox';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <WeekSelect />
        <FlexXBox width='100vw'>
          <SideNav order={3} excited={true} />
          <FlexYBox padding='3% 15%'>
            <SearchBox order={4} excited={false} />
            <StockInformation stockSymbol='AAPL' companyName='Apple Inc.' isOnWatchList />
            <StockInformation stockSymbol='TSLA' companyName='Tesla Inc.' isOnWatchList isFavorite />
            <StockInformation stockSymbol='LULU' companyName='Lululemon Athletica Inc.' />
          </FlexYBox>
        </FlexXBox>
      </Box>
    </ThemeProvider>
  );
}

export default App
