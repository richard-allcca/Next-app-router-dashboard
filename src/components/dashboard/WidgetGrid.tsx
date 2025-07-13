'use client';

import { useAppSelector } from '@/store';
import { IoCafeOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        title={count.toString()}
        subtitle="Productos agregados"
        icon={<IoCafeOutline size={70} className="text-blue-500" />}
        label='Contador'
        href="/dashboard/counter"
      />
    </div>
  );
};
