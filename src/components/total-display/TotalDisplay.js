import React from 'react';

const TotalDisplay = (props) => {
    const {total}  = props;
  return(
    <div>
        <span>{total}</span>
    </div>
  );
}

export default TotalDisplay;