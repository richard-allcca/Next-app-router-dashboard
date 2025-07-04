'use client';

import { useState } from "react";

const CartCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <span className='text-9xl'>{count}</span>

    <div className="mt-4 space-y-2">
      <button
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
    </>
  );
};

export default CartCounter;