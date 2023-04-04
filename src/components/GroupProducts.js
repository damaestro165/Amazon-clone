import ProductCard from './ProductCard';

export const GroupProducts = () => {
  return (
    <div className=' z-50 grid gap-3 grid-cols-4 w-[90%]'>
      <ProductCard
        title='Jewelery'
        image='/images/jewelery.jpg'
        query='jewelery'
      />
      <ProductCard
        title='Electronics'
        image='/images/electronic.jpg'
        query='electronics'
      />
      <ProductCard
        title="Women's cloth"
        image='/images/women.jpg'
        query="men's%20clothing"
      />
      <ProductCard
        title="Men's cloth"
        image='/images/men.jpg'
        query="men's%20clothing"
      />
    </div>
  );
};
