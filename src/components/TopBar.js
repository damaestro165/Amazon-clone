import {
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCart, BiSearch } from 'react-icons/bi';

const TopBar = () => {
  return (
    <div className='bg-[#131921] p-2 text-white flex justify-evenly w-full'>
      <div className=' w-16 flex items-center '>
        <Image
          src='/images/amazon.png'
          alt='amazon logo'
          width={60}
          height={40}
          className=' cursor-pointer'
        />
      </div>
      <div className='flex gap-1 text-white items-end'>
        <Icon as={HiOutlineLocationMarker} color='white' size='2rem' />
        <div className='flex flex-col'>
          <p className='text-[.5rem]'>Deliver to </p>
          <p className=' font-semibold text-xs'>Location</p>
        </div>
      </div>
      <div className='hidden md:inline-block w-[50rem]'>
        <InputGroup>
          <InputLeftElement color='gray.300' fontSize='1em' h='2rem'>
            <Button
              bg='#f3f3f3'
              color='blackAlpha.600'
              fontSize='xs'
              h='2rem'
              borderRightRadius='none'
              borderRight='1px'
            >
              All
            </Button>
          </InputLeftElement>
          <Input
            placeholder='Search Amazon'
            bgColor='white'
            color='blackAlpha.900'
            fontSize='xs'
            pl='3rem'
            h='2rem'
          />
          <InputRightElement h='2rem'>
            <Button bg='#febd69' h='2rem' borderLeftRadius='none'>
              <Icon as={BiSearch} size='8rem' color='#4b4339' />
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <div className='flex items-end'>
        <p className=' font-semibold text-xs'>EN</p>
      </div>

      <div className='flex flex-col'>
        <p className='text-[.5rem]'>Hello, sign in </p>
        <p className=' font-semibold text-xs'>Account & List</p>
      </div>
      <div className='flex flex-col'>
        <p className='text-[.5rem]'>Return </p>
        <p className=' font-semibold text-xs'>& Orders</p>
      </div>
      <div className='flex  items-end gap-1 text-white'>
        <Icon as={BiCart} />
        <p className='font-semibold text-xs'>Cart </p>
      </div>
    </div>
  );
};

export default TopBar;
