import { useSession } from 'next-auth/client';
import { useSnackbar } from 'notistack';
import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initialStatePropertySlice, initialuiState } from '../../utils/types';
import Spinner from '../loader/Spinner';
import LoginModal from '../user/LoginModal';
import Login from '../user/LoginPage';
import { uiActions } from './../../utils/store/ui-slice';

export default function CheckOutForm() {

const [session,loading]=useSession()
const {enqueueSnackbar}=useSnackbar();

const dispatch=useDispatch()

const showLoginModal=useSelector((state:{ui:initialuiState})=>state.ui.showLoginModal)
  const productsPrice=useSelector((state: { cart:initialStatePropertySlice }) =>state.cart.allProductPrice)



  const checkOutHandler=()=>{

    if(!session){
    dispatch(uiActions.showLoginModal())
    
    }

enqueueSnackbar('Credit Card number is invalid',{
  variant:'error'
})



  }

  return (
    <div className='w-full max-w-screen-lg bg-white '>
        <h2 className='text-lg font-semibold px-2 py-2'>Total - ${productsPrice}</h2>
      <div className=' rounded mt-4 shadow-lg  w-full'>
          <div className='border-t'>
            <div className='flex items-center px-8 py-5'>
           <input
                className='appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600'
                type='radio'
              />
              <label className='text-sm font-medium ml-4'>Credit Card</label>
            </div>
            <div className='grid grid-cols-2 gap-4 px-8 pb-8'>
              <div className='col-span-2'>
                <label className='text-xs font-semibold' htmlFor='cardNumber'>
                  Card number
                </label>
                <input
                  className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                  type='text'
                  placeholder='0000 0000 0000 0000'
                />
              </div>
              <div className=''>
                <label className='text-xs font-semibold' htmlFor='cardNumber'>
                  Expiry Date
                </label>
                <input
                  className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                  type='text'
                  placeholder='MM/YY'
                />
              </div>
              <div className=''>
                <label className='text-xs font-semibold' htmlFor='cardNumber'>
                  CVC/CVV
                </label>
                <input
                  className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                  type='password'
                  placeholder='...'
                />
              </div>
            </div>
          </div>
          <div className='w-full mx-auto'>
          <button
            type='button'
            className='py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-1/3 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  opacity-70  rounded-lg  mb-5 mx-5'
            onClick={checkOutHandler} >
            Check Out
          </button></div>
        </div>
 {showLoginModal && (   <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen w-full flex-col bg-opacity-30 bg-gray-900'> 
 <button
                type='button'
                className='text-white  focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'
                onClick={() => dispatch(uiActions.hideLoginModal())}
              >
 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></button>
 
 <Login/>
 </div>
 )}
    </div>
  );
}
