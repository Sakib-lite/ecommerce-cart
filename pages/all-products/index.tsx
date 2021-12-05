import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Products from '../../components/Product/Products';
import { getCategoryList } from '../../utils/product-utility';
import { cartActions } from '../../utils/store/cart-slice';
import { initialStatePropertySlice } from '../../utils/types';

export default function AllProducts() {
  const categoryListArr = getCategoryList();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['cart']);

  useEffect(() => {
    dispatch(
      cartActions.replaceCart(cookies.cart || { items: [], totalQuantity: 0 })
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cart = useSelector(
    (state: { cart: initialStatePropertySlice }) => state.cart
  );

  const cookiesHandler = useCallback(() => {
    setCookie('cart', cart,{expires: new Date(Date.now() + 2592000)});
  }, [cart, setCookie]);

  useEffect(() => {
    cookiesHandler();
  }, [cookiesHandler]);

  return (
    <section className='bg-gray-100 body-font pb-20'>
      <div className=' mx-auto space-y-20'>
        {categoryListArr.map((cata) => (
          <Products category={cata} key={Math.random()} />
        ))}

        {/* <Products category='Shirts' />
        <Products category='Pants' />
        <Products category='Shoes' />
        <Products category='Cosmetics' />
        <Products category='Bag' />
        <Products category='Watch' />
        <Products category='Accessories' /> */}
      </div>
    </section>
  );
}
