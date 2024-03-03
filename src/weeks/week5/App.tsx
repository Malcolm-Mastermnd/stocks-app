import WeekSelect from '../../components/WeekSelect/WeekSelect';
import SideNav, { SIDE_NAV_WIDTH } from './components/SideNav/SideNav';
import theme from './theme/theme';
import { Box, ThemeProvider } from '@mui/material';
import FlexXBox from './components/common/FlexXBox';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <WeekSelect />
        <FlexXBox width='100vw'>
          <SideNav />
          <Box marginLeft={SIDE_NAV_WIDTH} padding='3% 15%'>
            <Outlet />
          </Box>
        </FlexXBox>
      </Box>
    </ThemeProvider>
  );
}

export default App
