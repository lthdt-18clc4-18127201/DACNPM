import React from 'react';
import { SaleWidgetWrapper } from './SaleWidget.styles';
/* eslint-disable react/prop-types */
export default function SaleWidget({ fontColor, label, price, details }) {
  const textColor = {
    color: fontColor,
  };

  return (
    <SaleWidgetWrapper className="isoSaleWidget">
      <h3 className="isoSaleLabel">{label}</h3>
      <span className="isoSalePrice" style={textColor}>
        {price}
      </span>
      <p className="isoSaleDetails">{details}</p>
    </SaleWidgetWrapper>
  );
}
