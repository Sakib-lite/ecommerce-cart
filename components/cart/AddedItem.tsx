import React, { Fragment } from 'react';
import Image from 'next/image';
import { cartItems } from '../../utils/types';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../utils/store/cart-slice';


export default function AddedItem({ name, totalPrice, image,quantity,id }: cartItems) {

const dispatch=useDispatch();

const removeItemHandler=()=>{
dispatch(cartActions.removeItemfromCart(id))

  
}


  return (
    <Fragment>
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <a className='block relative'>
                <Image
                  alt='profil'
                  src={image}
                  className='mx-auto object-cover rounded-full lg:h-6 lg:w-6 w-3 h-3'
                  width='50'
                  height='50'
                />
              </a>
            </div>
            <div className='ml-3'>
              <p className='text-gray-900 whitespace-no-wrap text-xs'>{name}</p>
            </div>
          </div>
        </td>
        <td className='px-5 py-5 border-b border-gray-200  text-sm '>
          <p className='text-gray-900 lg:mx-7 mx-7'>{quantity}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap lg:mx-8 md:mx-8 mx-3 '>{totalPrice}</p>
        </td>
        <td className='px-8 py-5 border-b border-gray-200 bg-white text-sm'>
        <button className="" onClick={removeItemHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-60" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg></button>
        </td>
      </tr>
    </Fragment>
  );
}
