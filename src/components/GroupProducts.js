import ProductCard from './ProductCard';

export const GroupProducts = () => {
  return (
    <div className=' z-50 grid gap-3 grid-cols-4 w-[90%]'>
      <ProductCard title='jewelery' image='/images/jewelry.jpeg' />
    </div>
  );
};
