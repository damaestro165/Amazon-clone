import React from 'react';
import { client } from '../../../client';

const categories = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map(({ category }) => (
        <div key={category.name}>
          <div>{category.name}</div>
          {category.products?.map((product) => (
            <div key={product?.name}>{product?.name}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default categories;

export const getServerSideProps = async () => {
  const res = await client.fetch(`*[_type == "categories"]`);
  const data = await JSON.parse(JSON.stringify(res));

  return {
    props: {
      data,
    },
  };
};
