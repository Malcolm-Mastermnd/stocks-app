import React from 'react';

type AdvancedInfoCardsStyles = {
  root: React.CSSProperties,
}

const divWithBorder: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  border: '3px solid green',
}

const styles: AdvancedInfoCardsStyles = {
  root: {
    ...divWithBorder,
    height: '350px',
  },
}

interface AdvancedInfoCardsProps {
  order: number;
  excited: boolean;
}

function AdvancedInfoCards({
  order,
  excited,
}: AdvancedInfoCardsProps) {
  return (
    <div style={styles.root}>
      <div>Advanced Info Cards</div>
      <div>{`Order that this will be worked on: ${order}`}</div>
      <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
    </div>
  );
}

export default AdvancedInfoCards;
