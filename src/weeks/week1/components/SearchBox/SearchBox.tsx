import React from 'react';

type SearchBoxStyles = {
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

const styles: SearchBoxStyles = {
  root: {
    ...divWithBorder,
    height: '100px',
    marginBottom: '8px',
  },
}

interface SearchBoxProps {
  order: number;
  excited: boolean;
}

function SearchBox({
  order,
  excited,
}: SearchBoxProps) {
  return (
    <div style={styles.root}>
      <div>Search Bar</div>
      <div>{`Order that this will be worked on: ${order}`}</div>
      <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
    </div>
  );
}

export default SearchBox;
