import React from 'react';
import { client, urlFor } from '../../../client';
import Image from 'next/image';

const categories = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map(({ category }) => (
        <div key={category.name}>
          <div>{category.name}</div>
          {category.products?.map((product) => (
            <div key={product?.name}>
              <div>{product?.name}</div>
              <Image
                className=' w-46 h-52'
                src={urlFor(product.image[0]).url()}
                alt={product.name}
                width={200}
                height={74}
              />
            </div>
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
