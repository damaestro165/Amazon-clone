import Link from 'next/link';
import ProductCard from './ProductCard';

export const GroupProducts = () => {
  return (
    <div className=' z-50 grid gap-3 grid-cols-4 w-[90%]'>
      <Link href='/categories/jewelery'>
        <ProductCard title='Jewelery' image='/images/jewelry.jpeg' />
      </Link>
    </div>
  );
};
