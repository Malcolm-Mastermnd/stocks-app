import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import FlexYBox from '../common/FlexYBox';
import SideNavLink from './SideNavLink/SideNavLink';
import FlexXBox from '../common/FlexXBox';
import { useContext } from 'react';
import { UserPreferencesContext } from '../../context/react-context/UserPreferences';
import StonklyLogo from '../../../../assets/stonkly-logo.png';

export const SIDE_NAV_WIDTH = '300px';

function SideNav() {
  const { currency, setCurrency } = useContext(UserPreferencesContext);

  return (
    <FlexYBox
      height='100vh'
      position='fixed'
      width={SIDE_NAV_WIDTH}
      boxSizing='border-box'
      p={2}
      bgcolor='#121212'
      left={0}
      top={0}
      gap={6}
    >
      {/* Logo */}
      <Box
        component='img'
        alt='Stonkly Logo'
        src={StonklyLogo}
      />

      {/* Currency Toggle */}
      <FlexXBox justifyContent='flex-end'>
        <ToggleButtonGroup value={currency}>
          <ToggleButton value='USD' onClick={() => setCurrency('USD')}>$ USD</ToggleButton>
          <ToggleButton value='EUR' onClick={() => setCurrency('EUR')}>€ EUR</ToggleButton>
        </ToggleButtonGroup>
      </FlexXBox>

      {/* Links */}
      <FlexYBox gap={2}>
        <SideNavLink link='/week5/search' text='Search' />
        <SideNavLink link='/week5/watchlist' text='Watchlist' />
        <SideNavLink link='/week5/favorite' text='Favorite' />
      </FlexYBox>
    </FlexYBox>
  );
}

export default SideNav;
