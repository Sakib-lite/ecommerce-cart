import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { cartItemProperty, initialStatePropertySlice } from '../../utils/types';
import AddedItem from './AddedItem';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';
import { cartActions } from './../../utils/store/cart-slice';

export default function CartPage() {
  const [cookies, setCookie] = useCookies(['cart']);
const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(cartActions.replaceCart(cookies.cart || {items:[],totalQuantity:0}));
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


const cart = useSelector(
  (state: { cart:initialStatePropertySlice }) => state.cart
);


const cookiesHandler = useCallback(() => {
  setCookie('cart', cart,{expires: new Date(Date.now() + 2592000)});
}, [cart,setCookie]);

useEffect(() => {
  cookiesHandler();
},[cookiesHandler]);


const cartLength=cart.items.length

console.log(cartLength)

  return (
    <div>
      <div className='container  px-4 sm:px-8 max-w-3xl'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            {cartLength>0 ? (  <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left lg:text-sm text-xs uppercase font-normal '
                    >
                      Product
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left lg:text-sm uppercase font-normal text-xs'
                    >
                      Quantity
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Total Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-red-300 text-xs md:text-left md:text-sm uppercase font-normal '
                    ></th>
                  </tr>
                </thead>
                <tbody> 
    
                  {cart?.items?.map((product: cartItemProperty) => (
                    <AddedItem
                      key={product.id}
                      totalPrice={product.totalPrice}
                      image={product.image}
                      name={product.name}
                      quantity={product.quantity}
                      id={product.id}
                    />
                    
                  ))}
               </tbody>
              </table>):<EmptyCart/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
