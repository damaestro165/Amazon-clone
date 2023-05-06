import { BiMenu } from 'react-icons/bi';
import { Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SideBar from './SideBar';

export const BottomBar = () => {
  return (
    <div className='bg-[#232f3e] w-full h-8 flex p-2 items-center text-white text-xs gap-4 font-semibold'>
      <div className='text-white flex items-center'>
        <SideBar>
          <Icon as={BiMenu} color='white' />
          <Text>All</Text>
        </SideBar>
      </div>
      <Link href='/' legacyBehavior>
        <a>Today&apos;s Deal</a>
      </Link>
      <Link href='/' legacyBehavior>
        <a>Customer Service</a>
      </Link>
      <Link href='/' legacyBehavior>
        <a>Registry</a>
      </Link>
      <Link href='/' legacyBehavior>
        <a>Gift Cards</a>
      </Link>
      <Link href='/' legacyBehavior>
        <a>Sell</a>
      </Link>
    </div>
  );
};
