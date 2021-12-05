import React from 'react';
import CartItem from '../cart/CartItem';

type propsProduct = {
  category: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  image: string;
  id:number
};
export default function ProductList({
  category,
  name,
  price,
  description,
  slug,
  image,
  id
}: propsProduct) {
  return (
   
      <CartItem key={id}
      name={name}
      price={price}
      description={description}
      image={image}
      slug={slug}
      id={id}
      category={category}
      />

  );
}
