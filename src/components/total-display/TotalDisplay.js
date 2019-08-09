import React from 'react';

const TotalDisplay = (props) => {
    const {total}  = props;
  return(
    <div>
        <span>{total * 1.06}</span>
    </div>
  );
}

export default TotalDisplay;