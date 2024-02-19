import React from 'react';

type SideNavStyles = {
  root: React.CSSProperties,
}

const divWithBorder: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px solid green',
}

const styles: SideNavStyles = {
  root: {
    ...divWithBorder,
    height: '100vh',
  },
}

interface SideNavProps {
  order: number;
  excited: boolean;
}

function SideNav({
  order,
  excited,
}: SideNavProps) {
  return (
    <div style={styles.root}>
      <div>Side Nav</div>
      <div>{`Order that this will be worked on: ${order}`}</div>
      <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
    </div>
  );
}

export default SideNav;
