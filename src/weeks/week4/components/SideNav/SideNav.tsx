import { Typography } from '@mui/material';
import FlexYBox from '../common/FlexYBox';
import SideNavLink from './SideNavLink/SideNavLink';

export const SIDE_NAV_WIDTH = '300px';

function SideNav() {
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
    >
      <Typography variant='h2'>STONKLY</Typography>

      <FlexYBox gap={2} mt={4}>
        <SideNavLink link='/week4/search' text='Search' />
        <SideNavLink link='/week4/watchlist' text='Watchlist' />
        <SideNavLink link='/week4/favorite' text='Favorite' />
      </FlexYBox>
    </FlexYBox>
  );
}

export default SideNav;
