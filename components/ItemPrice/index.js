/* eslint-disable no-underscore-dangle */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { CURRENCIES } from "../../constants";

const ItemPrice = ({ currency, price, size }) => {
  const [amount, decimal] = useMemo(() => {
    const _decimal = Math.floor((price - Math.floor(price)) * 100);
    const _amount = Math.floor(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return [_amount, _decimal];
  }, []);
  return (
    <div className={`flex flex-row font-semibold text-${size}`}>
      {CURRENCIES[currency] || currency} {amount}{" "}
      {decimal > 0 && (
        <div className={`pt-1 ml-1 text-${size === "3xl" ? "lg" : "sm"}`}>
          {decimal}
        </div>
      )}
    </div>
  );
};

ItemPrice.propTypes = {
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  size: PropTypes.string,
};
ItemPrice.defaultProps = {
  size: "xl",
};

export default ItemPrice;
