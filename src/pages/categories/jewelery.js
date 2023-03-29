const Product = () => {
  return <div>Product</div>;
};

export default Product;

export const getSevercProps = async (context) => {
  const res = await fetch(
    'https://fakestoreapi.com/products/category/jewelery'
  );
  const data = await res.json();
  console.log(data);
  console.log(context);
  return {
    props: {
      data,
    },
  };
};
