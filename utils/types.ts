export type item = {
  name: string;
  price: number;
  description: string;
  image: string;
  slug: string;
  id: number;
  category: string;
};

export type cartItems={
name: string;
totalPrice: number;
image: string;
quantity: number;
id: number;

}

export type itemsProperty = {
  name: string;
  price: number;
  description: string;
  image: string;
  slug: string;
  id: number;
  category: string;
  quantity: number;
  totalPrice: number;
};
export type initialStatePropertySlice = {
  items: itemsProperty[];
  totalQuantity: number;
};

export type cartItemProperty = {
  name: string;
  totalPrice: number;
  quantity: number;
  image: string;
  id: number;
}
export type payloadItems = {
cart:itemsProperty[]
}