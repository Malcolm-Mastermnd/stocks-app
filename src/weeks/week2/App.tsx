import React from 'react';
import WeekSelect from '../../components/WeekSelect/WeekSelect';
import SideNav from './components/SideNav/SideNav';
import SearchBox from './components/SearchBox/SearchBox';
import BasicInfoCard from './components/BasicInfoCard/BasicInfoCard';
import AdvancedInfoCards from './components/AdvancedInfoCards/AdvancedInfoCards';
import theme from './theme/theme';
import { ThemeProvider } from '@mui/material';

type AppStyles = {
  root: React.CSSProperties,
  contentContainer: React.CSSProperties,
}

const divWithBorder: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px solid green',
}

const styles: AppStyles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
  },
  contentContainer: {
    ...divWithBorder,
    height: 'calc(100% - 80px)',
    padding: '3% 15%',
    overflowY: 'auto',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: undefined,
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <WeekSelect />
        <div style={styles.root}>
          <SideNav order={3} excited={true} />
          <div style={styles.contentContainer}>
            <SearchBox order={4} excited={false} />
            <BasicInfoCard
              stockSymbol='AAPL'
              companyName='Apple Inc.'
              isOnWatchList
              dayPercentChange={-1.35}
              currentPrice={145.37}
              dayHigh={146.7}
              dayLow={139.6}
              newsStory='Apple laucnches Vision'
            />
            <BasicInfoCard
              stockSymbol='TSLA'
              companyName='Tesla Inc.'
              isFavorite
              dayPercentChange={5.24}
              currentPrice={113.37}
              dayHigh={115.79}
              dayLow={110.09}
              newsStory='Tesla launches new Cybertuck'
            />
            <BasicInfoCard
              stockSymbol='LULU'
              companyName='Lululemon Athletica Inc.'
              dayPercentChange={-2.35}
              currentPrice={345.37}
              dayHigh={346.7}
              dayLow={339.6}
              newsStory='Lululemon launches new Yoga Mat'
            />

            <AdvancedInfoCards 
              weekPercentChange={4.89}
              monthPercentChange={21.50}
              yearPercentChange={-14.35}
              dividendYield={0.53}
              earningsPerShare={1.46}
              marketCap={2820000000000}
            />
            <AdvancedInfoCards 
              weekPercentChange={-2.59}
              monthPercentChange={10.08}
              yearPercentChange={4.35}
              earningsPerShare={-1.78}
              marketCap={45700000000}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
