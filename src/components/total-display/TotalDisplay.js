import React from "react";
import CurrencyFormatter from "../../utilities/CurrencyFormatter";

import './total-display.css';

const TotalDisplay = props => {
  const { total } = props;
  return (
    <div className="total-dislplay-container">
      <span>Total: {CurrencyFormatter.formatNumberToUSCurrency(total)}</span>
      <span>Taxes: {CurrencyFormatter.formatNumberToUSCurrency(total * 0.06)}</span>
      <span>Grand Total: {CurrencyFormatter.formatNumberToUSCurrency(total * 1.06)}</span>
    </div>
  );
};

export default TotalDisplay;
