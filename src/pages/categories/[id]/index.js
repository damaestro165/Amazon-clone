import { Box, Text, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Product = ({ data }) => {
  return (
    <div className='flex mt-5'>
      <div className='w-1/6'></div>
      <div className='grid grid-cols-4 w-5/6 gap-5'>
        {data.map((product) => (
          <div key={product.id}>
            <Box className=''>
              <Image
                className=' w-46 h-52'
                src={product.image}
                alt={product.title}
                width={200}
                height={74}
              />
              <Text>{product.title}</Text>
              <Box className='flex gap-2'>
                <Text>{product.rating.rate}</Text>
                <Box>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Icon
                        as={FaStar}
                        key={i}
                        color={i < product.rating.rate ? '#fda21c' : 'gray.300'}
                      />
                    ))}
                </Box>
                <Text>({product.rating.count})</Text>
              </Box>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const catPath = context.params.id;
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${catPath}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Product;
