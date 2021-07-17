import React, { useState, useEffect } from 'react';
import Products from './componant/products/products'
import Navbar from './componant/Navbar/Navbar'
import { commerce } from './lib/commerce'

import Cart from '../src/componant/Cart/Cart'

const App = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState({});
    const fetchProducts = async () => {
        const { data } = await commerce.products.list() ;
        setProducts ( data ) ;
    }


    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
    useEffect(()=> {
        fetchProducts();
        fetchCart();
    }, []  )
console.log(cart)
    return (
        <div>
            <Navbar totalItems={cart.total_items} />
            <Products products={products} onAddToCart={handleAddToCart} />
            <Cart />
            
        </div>
    )
}

export default App
