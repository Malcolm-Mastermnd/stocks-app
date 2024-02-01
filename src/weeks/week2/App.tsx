import React from 'react';
import WeekSelect from '../../components/WeekSelect/WeekSelect';
import SideNav from './components/SideNav/SideNav';
import SearchBox from './components/SearchBox/SearchBox';
import BasicInfoCard from './components/BasicInfoCard/BasicInfoCard';
import AdvancedInfoCards from './components/AdvancedInfoCard/AdvancedInfoCard';

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
    <div>
      <WeekSelect />
      <div style={styles.root}>
        <SideNav order={3} excited={true} />
        <div style={styles.contentContainer}>
          <SearchBox order={4} excited={false} />
          <BasicInfoCard order={1} excited={true} />
          <AdvancedInfoCards order={2} excited={true} />
        </div>
      </div>
    </div>
  );
}

export default App
