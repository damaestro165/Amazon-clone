import { Box, Center, Text, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { client } from '../../client';

const AllProduct = ({ data }) => {
  // console.log(data);
  // return (
  //   <Center className='p-5'>
  //     <Text>All Products</Text>
  //     {data?.map((product) => (
  //       <div key={product.id}>
  //         <Box className=''>
  //           <Image
  //             className=' w-46 h-52'
  //             src={product.image}
  //             alt={product.title}
  //             width={200}
  //             height={74}
  //           />
  //           <Text>{product.title}</Text>
  //           <Box className='flex gap-2'>
  //             <Text>{product.rating.rate}</Text>
  //             <Box>
  //               {Array(5)
  //                 .fill('')
  //                 .map((_, i) => (
  //                   <Icon
  //                     as={FaStar}
  //                     key={i}
  //                     color={i < product.rating.rate ? '#fda21c' : 'gray.300'}
  //                   />
  //                 ))}
  //             </Box>
  //             <Text>({product.rating.count})</Text>
  //           </Box>
  //         </Box>
  //       </div>
  //     ))}
  //   </Center>
  // );
};

export default AllProduct;
