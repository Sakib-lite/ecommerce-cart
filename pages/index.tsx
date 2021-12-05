import type { NextPage } from 'next';
import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import CartList from '../components/cart/CartList';

import styles from '../styles/Home.module.css';
import { initialStatePropertySlice } from '../utils/types';
import LandingPage from './../components/Home/LandingPage';
import { cartActions } from './../utils/store/cart-slice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['cart']);

  // console.log(new Date(Date.now() + 2592000))
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

  return (
    <div className={styles.container}>
      

      <LandingPage />
      <CartList />
    </div>
  );
};

export default Home;
