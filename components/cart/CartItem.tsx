import React from 'react';
import Image from 'next/image';
import { item } from '../../utils/types';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../utils/store/cart-slice';

export default function CartItem({
  name,
  price,
  description,
  image,
  slug,
  id,
  category,
}: item) {
  const dispatch = useDispatch();

  const addOrderHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        name,
        price,
        description,
        image,
        slug,
        id,
        category,
      })
    );
  };

  return (
    <div className=' md:p-4 md:w-72 w-32  mb-6 rounded-lg hover:shadow-2xl bg-gray-200'>
      <a className=' relative md:h-48 h-24 rounded justify-center'>
        <Image
          alt='ecommerce'
          className='object-cover  w-full h-full '
          src={image}
          width='200'
          height='200'
        />
      </a>
      <div className='mt-4'>
        <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1'>
          {name}
        </h3>
        <h2 className='text-gray-900 title-font md:text-lg text-sm line-clamp-1 font-medium'>
          {description}
        </h2>
        <p className='mt-1'>${price}</p>
      </div>

      <button
        className='py-2 px-1 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center '
        onClick={addOrderHandler}
      >
        Add to order
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 ml-2 hidden md:block'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      </button>
    </div>
  );
}
