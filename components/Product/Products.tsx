import React from 'react';
import { getCatagorizedProducts } from '../../utils/product-utility';
import ProductList from './ProductList';
import styles from './Product.module.css';

type a = {
  category: string;
};
export default function Products({ category }: a) {
  const shirts = getCatagorizedProducts(category);
  return (
    <div>
      <div className={styles.bg}>
        <p className=' text-2xl md:text-4xl font-normal leading-normal mt-0 mb-2 text-gray-600 bg-transparent underline font-serif'>
          {category}
        </p>
        <div className='grid lg:grid-cols-3 lg:ml-20 ml-10  grid-cols-2  md:grid-cols-2 justify-center'>
          {shirts.map((product) => (
            <ProductList
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              image={product.image}
              slug={product.slug}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
