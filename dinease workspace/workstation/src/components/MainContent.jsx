import React, { useState } from 'react';

const MainContent = () => {
  // Orders list
  const orders = [
    { id: 1, dish: "Spaghetti Carbonara", price: 250 },
    { id: 2, dish: "Chicken Tikka Masala", price: 300 },
    { id: 3, dish: "Margherita Pizza", price: 200 },
    { id: 4, dish: "Sushi Rolls", price: 400 },
    { id: 5, dish: "Beef Bourguignon", price: 350 },
    { id: 6, dish: "Pad Thai", price: 280 },
    { id: 7, dish: "Caesar Salad", price: 150 },
    { id: 8, dish: "Hamburger", price: 180 },
    { id: 9, dish: "Fish and Chips", price: 220 },
    { id: 10, dish: "Veggie Stir Fry", price: 200 },
  ];

  // State to manage the current order, quantity, and added items
  const [selectedItem, setSelectedItem] = useState(orders[0]);
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [taxes, setTaxes] = useState(0);

  // Calculate total amount based on selected item and quantity
  const totalAmount = selectedItem.price * quantity;

  // Calculate total bill amount
  const billTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate final amount with discounts and taxes
  const finalAmount = billTotal - discount + taxes;

  // Handle item change
  const handleItemChange = (e) => {
    const item = orders.find(order => order.id === parseInt(e.target.value));
    setSelectedItem(item);
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  // Add item to bill
  const addItemToBill = () => {
    setItems([...items, { ...selectedItem, quantity }]);
    setQuantity(1); // Reset quantity to 1 after adding
  };

  // Remove item from bill
  const removeItemFromBill = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Apply discount
  const applyDiscount = () => {
    const discountValue = parseFloat(prompt("Enter discount amount:"));
    if (!isNaN(discountValue)) {
      setDiscount(discountValue);
    }
  };

  // Apply taxes
  const applyTaxes = () => {
    const taxValue = parseFloat(prompt("Enter tax amount:"));
    if (!isNaN(taxValue)) {
      setTaxes(taxValue);
    }
  };

  return (
    <div className="flex-1 p-4 bg-white overflow-y-auto">
      <h2 className="text-lg font-bold mb-4 text-red-500">Generate Bill</h2>
      <form className="space-y-4">
        {/* Order Type Section */}
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-sm">
            <input type="radio" name="orderType" className="mr-1" /> Delivery
          </label>
          <label className="flex items-center text-sm">
            <input type="radio" name="orderType" className="mr-1" /> Pickup
          </label>
          <label className="flex items-center text-sm">
            <input type="radio" name="orderType" className="mr-1" /> Dine In
          </label>
          <input
            type="text"
            placeholder="Dine In"
            className="border border-gray-300 p-1 rounded w-16 text-sm"
          />
          <input
            type="text"
            placeholder="Table No."
            className="border border-gray-300 p-1 rounded w-16 text-sm"
          />
          <input
            type="text"
            placeholder="Portions"
            className="border border-gray-300 p-1 rounded w-16 text-sm"
          />
        </div>

        {/* Customer Details Section */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <input
            type="text"
            placeholder="Mobile: Enter min. 10 digit"
            className="border border-gray-300 p-1 rounded"
          />
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-1 rounded"
          />
          <input
            type="text"
            placeholder="Add: Enter address"
            className="border border-gray-300 p-1 rounded"
          />
          <input
            type="text"
            placeholder="Enter locality"
            className="border border-gray-300 p-1 rounded col-span-2"
          />
        </div>

        {/* Item Details Section */}
        <div className="border-t border-b border-gray-300 py-2">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-red-100">
                <th className="p-1">Item</th>
                <th className="p-1">Check Item</th>
                <th className="p-1">Special Note</th>
                <th className="p-1">Qty.</th>
                <th className="p-1">Price</th>
                <th className="p-1">Amount</th>
                <th className="p-1">Add</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Dropdown for Item Selection */}
                <td className="p-1">
                  <select
                    value={selectedItem.id}
                    onChange={handleItemChange}
                    className="border border-gray-300 p-1 rounded w-full text-sm"
                  >
                    {orders.map(order => (
                      <option key={order.id} value={order.id}>
                        {order.dish}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-1">
                  <input type="checkbox" />
                </td>
                <td className="p-1">
                  <input
                    type="text"
                    placeholder="Special Note"
                    className="border border-gray-300 p-1 rounded w-full text-sm"
                  />
                </td>
                {/* Quantity Input */}
                <td className="p-1">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="border border-gray-300 p-1 rounded w-12 text-sm"
                  />
                </td>
                {/* Displaying Price and Amount */}
                <td className="p-1">{selectedItem.price.toFixed(2)}</td>
                <td className="p-1">{totalAmount.toFixed(2)}</td>
                <td className="p-1">
                  <button
                    type="button"
                    onClick={addItemToBill}
                    className="text-red-500 hover:underline text-sm"
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Added Items Section */}
        {items.length > 0 && (
          <div className="border-t border-gray-300 py-2">
            <h3 className="text-lg font-bold mb-2 text-red-500">Current Bill</h3>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-red-100">
                  <th className="p-1">Item</th>
                  <th className="p-1">Qty.</th>
                  <th className="p-1">Price</th>
                  <th className="p-1">Amount</th>
                  <th className="p-1">Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td className="p-1">{item.dish}</td>
                    <td className="p-1">{item.quantity}</td>
                    <td className="p-1">{item.price.toFixed(2)}</td>
                    <td className="p-1">{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-1">
                      <button
                        type="button"
                        onClick={() => removeItemFromBill(index)}
                        className="text-red-500 hover:underline text-sm"
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between mt-2">
              <span className="font-bold text-red-500 text-sm">Total</span>
              <span className="font-bold text-red-500 text-sm">{billTotal.toFixed(2)}</span>
            </div>
          </div>
        )}

        {/* Order Summary Section */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Applied Discounts</span>
            <span className="text-red-500 cursor-pointer" onClick={applyDiscount}>[Apply Discount]</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Applied Taxes</span>
            <span className="text-red-500 cursor-pointer" onClick={applyTaxes}>[Apply Taxes]</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery Charge</span>
            <span className="w-20 border-b border-gray-300">0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Container Charge</span>
            <span className="w-20 border-b border-gray-300">0.00</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Round Off</span>
            <span className="w-20 border-b border-gray-300">+0.50</span>
          </div>
          <div className="flex justify-between font-bold text-sm">
            <span className="text-red-500">Final Amount</span>
            <span className="text-red-500">{finalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex space-x-2">
          <button type="button" className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 text-sm">
            Save
          </button>
          <button type="button" className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 text-sm">
            Print & Edit
          </button>
          <button type="button" className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-700 text-sm">
            Reset
          </button>
          <button type="button" className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-700 text-sm">
            KOT
          </button>
          <button
            type="button"
            onClick={addItemToBill}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 text-sm"
          >
            Generate Bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainContent;
