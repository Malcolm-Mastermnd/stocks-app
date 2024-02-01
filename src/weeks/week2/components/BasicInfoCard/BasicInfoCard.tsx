import React from "react";

type BasicInfoCardStyles = {
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

const styles: BasicInfoCardStyles = {
    root: {
        ...divWithBorder,
        height: '300px',
        marginBottom: '8px',
    },
}

interface BasicInfoCardProps {
    order: number;
    excited: boolean;
}

function BasicInfoCard({
    order,
    excited,
}: BasicInfoCardProps) {
    return (
        <div style={styles.root}>
            <div>Basic Info Card</div>
            <div>{`Order that this will be worked on: ${order}`}</div>
            <div>{`I am${excited ? '' : ' not'} excited to work on this part`}</div>
        </div>
    )
}

export default BasicInfoCard;
