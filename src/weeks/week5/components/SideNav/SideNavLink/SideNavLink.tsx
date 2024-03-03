import { ListItemButton, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface SideNavLinkProps {
  link: string,
  text: string,
}

function SideNavLink({
  link,
  text,
}: SideNavLinkProps) {
  const location = useLocation();
  const isActivePath = location.pathname === link;

  return (
    <ListItemButton component={Link} selected={isActivePath} to={link}>
      <ListItemText primary={text} />
    </ListItemButton>
  );
}

export default SideNavLink;
