'use client';

import { useAppSelector } from "@/store";
import { decrement, increment, initCounterState, reset } from "@/store/counter/counterSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface CartCounterProps {
  value?: number;
}

export interface CounterResponse {
  message: string;
  method:  string;
  url:     string;
  headers: Headers;
  count:  number;
}

export interface Headers {
  accept:              string;
  "accept-encoding":   string;
  connection:          string;
  host:                string;
  "user-agent":        string;
  "x-forwarded-for":   string;
  "x-forwarded-host":  string;
  "x-forwarded-port":  string;
  "x-forwarded-proto": string;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const response = await fetch('/api/counter', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch counter');
  }

  return response.json();
}

const CartCounter = ({value = 0}: CartCounterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value])

  useEffect(() => {
    getApiCounter()
      .then((data) => {
        console.log('API Response:', data);
        dispatch(initCounterState(data.count));
      })
      .catch((error) => {
        console.error('Error fetching counter:', error);
      });
  }, [dispatch]);

  return (
    <>
    <span className='text-9xl'>{count}</span>

    <div className="mt-4 space-y-2 flex">
      <button
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 h-full"
        onClick={() => dispatch(increment())}>
        +1
      </button>

      <button
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        onClick={() => dispatch(reset())}>
        Reset
      </button>

      <button
        className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2 h-full"
        onClick={() => dispatch(decrement())}>
        -1
      </button>

    </div>
    </>
  );
};

export default CartCounter;