import WeekSelect from '../../components/WeekSelect/WeekSelect';
import SideNav, { SIDE_NAV_WIDTH } from './components/SideNav/SideNav';
import theme from './theme/theme';
import { Box, ThemeProvider } from '@mui/material';
import FlexXBox from './components/common/FlexXBox';
import { Outlet } from 'react-router-dom';
import { UserPreferencesProvider } from './context/react-context/UserPreferences';
import { Provider } from 'react-redux';
import { reduxGlobalStore } from './context/redux/globalStore';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserPreferencesProvider>
        <Provider store={reduxGlobalStore}>
          <Box>
            <WeekSelect />
            <FlexXBox width='100vw' height='100%'>
              <SideNav />
              <Box marginLeft={SIDE_NAV_WIDTH} padding='3% 15%' width='100%'>
                <Outlet />
              </Box>
            </FlexXBox>
          </Box>
        </Provider>
      </UserPreferencesProvider>
    </ThemeProvider>
  );
}

export default App
