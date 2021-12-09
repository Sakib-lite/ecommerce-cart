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
  price: number;
  description: string;
  image: string;
  slug: string;
  id: number;
  category: string;
  totalPrice: number;
  quantity: number;


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
  allProductPrice:number
};

export type initialuiState={
  spinnigSpinner:boolean
  showLoginModal:boolean
}

export type cartItemProperty = {
  name: string;
  totalPrice: number;
  quantity: number;
  image: string;
  id: number;
  description: string;
  slug: string;
  price: number;
  category: string;

}
export type payloadItems = {
cart:itemsProperty[]
}