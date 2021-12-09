import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();
  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const cartHandler = () => {
    router.push('/cart');
  };

  const showDropdown = dropdown ? 'block' : 'hidden';

  return (
    <nav className='py-6 bg-gray-100'>
      <div className='container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/'>
              <a className='md:text-2xl text-lg   font-medium opacity-70 text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300'>
                E-Commerce
              </a>
            </Link>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
              aria-label='toggle menu'
              onClick={dropdownHandler}
            >
              <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                <path
                  fillRule='evenodd'
                  d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
        <div className={`${showDropdown}  lg:block`}>
          <div className='lg:items-center flex justify-evenly '>
            <div className='flex flex-col lg:flex-row lg:mx-6'>
              <Link href='/' passHref>
                <a className='md:text-lg lg:text-xl my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0'>
                  Home
                </a>
              </Link>
              <Link href='/all-products' passHref>
                <a className='md:text-lg lg:text-xl my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0'>
                  Products
                </a>
              </Link>

              <Link href='/register' passHref>
                <a className='md:text-lg lg:text-xl my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0'>
                  Sign Up
                </a>
              </Link>

              <Link href='/login' passHref>
           
                <a className='md:text-lg lg:text-xl my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0'>
                  Log in
                </a>
              </Link>
            </div>

            <div className='  lg:block'>
              <button
                onClick={cartHandler}
                className='relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300'
              >
                <svg
                  className='w-5 h-5 md:w-8 md:h-8'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span className='absolute top-0 left-0 p-1 text-xs text-white bg-indigo-500 rounded-full'></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
