import React from 'react';

const Square = ({style}) => {
    return (
        <div style = {style}></div>
    )
}

export default React.memo(Square);