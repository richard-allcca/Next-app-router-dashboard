
import CartCounter from '@/shopping-cart/components/CartCounter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Counter',
  description: 'A simple counter example',
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Productos en el carrito</span>

      <CartCounter/>
    </div>
  )
}
