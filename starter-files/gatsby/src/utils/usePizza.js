import { useState } from 'react';

export default function usePizza({ pizza, inputs }) {
  // 1. Create some state to hold ur order
  const [order, setOrder] = useState([]);
  // 2. Create a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // 3. Remove things from the order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }
  // 4. Send this data to a serverless function when they check out
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
