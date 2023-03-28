import { Heading, VStack, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ title, image }) => {
  return (
    <Box className='flex flex-col items-start bg-white p-5 gap-5'>
      <Heading as='h4' fontSize='xl' fontWeight='semibold'>
        {title}
      </Heading>
      <Image src={image} alt='productImage' width={250} height={250} />
      <Link href={''}>
        <Text>See more</Text>
      </Link>
    </Box>
  );
};

export default ProductCard;
