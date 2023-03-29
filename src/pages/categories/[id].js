const Product = () => {
  return <div>Product</div>;
};

export default Product;

export const getStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const data = await res.json;
  console.log(data);

  const paths = data.map((categories) => {
    return {
      params: { id: categories },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
