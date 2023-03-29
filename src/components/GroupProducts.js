import ProductCard from './ProductCard';

export const GroupProducts = () => {
  return (
    <div className=' z-50 grid gap-3 grid-cols-4 w-[90%]'>
      <ProductCard title="Men's Clothing" image='/images/mencloth.jpeg' />
      <ProductCard title='Electrons' image='/images/electronics.jpeg' />
      <ProductCard title='Jewelery' image='/images/jewelry.jpeg' />
      <ProductCard title="Women's clothing" image='/images/womencloths.jpeg' />
    </div>
  );
};
