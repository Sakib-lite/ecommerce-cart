import { data } from './data';

export function getAllProducts() {
  return data;
}

export function getCatagorizedProducts(catagory: string) {
  const product = data.filter((product) => product.category === catagory);
  return product;
}

export function getCategoryList() {
  const products = getAllProducts();
  const catagoryArr = products.map((product) => product.category);
  const filteredCatagoriesArr = catagoryArr.filter(
    (value, index) => catagoryArr.indexOf(value) === index
  );

  return filteredCatagoriesArr;
}


export function getFeaturedProducts() {

const allProducts = getAllProducts()
const products=allProducts.filter((product) => product.isFeatured)

return products
}