import React, { ChangeEvent } from "react";

const QuantityDropdown = () => {
  const handleQuantityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedQuantity = event.target.value;
    console.log("Selected Quantity:", selectedQuantity);
  };

  return (
    <div className="flex gap-2">
      <label htmlFor="quantity" className="text-sm">
        Qty:{" "}
      </label>
      <select
        id="quantity"
        name="quantity"
        className="text-sm"
        onChange={handleQuantityChange}
      >
        {/* You can adjust the quantity range based on your requirements */}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default QuantityDropdown;
