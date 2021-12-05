import React from 'react';
import { getFeaturedProducts } from '../../utils/product-utility';
import CartItem from './CartItem';

export default function CartList() {
  const products = getFeaturedProducts();

  return (
    <div>
      <section className='bg-gray-100 body-font'>
        <div className='container  py-10 mx-auto'>
         
        <p className=' text-2xl md:text-4xl font-normal leading-normal mt-0 mb-2 text-gray-600 bg-transparent underline font-serif py-4'>Featured Products</p>
          <div className='grid lg:grid-cols-3 lg:ml-20 md:ml-10 grid-cols-2 md:grid-cols-2  gap-6'>
            {products.map((product) => (
              <CartItem
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                slug={product.slug}
                id={product.id}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
