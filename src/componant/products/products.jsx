import React from 'react'
import Product from '../product/product'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

// const products1 = [
// { id:1, name: 'shoes' , description : 'renning shoes', price : '$6' , image : " " },
// { id:2, name: 'flower' , description : 'red flower', price : '$10', image: { Flower } }
// ];


const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
  <main className={classes.content} >
    <div  className={classes.toolbar} />
      <Grid container justifyContent='center' spacing = {5} >
            {products.map((product) => ( 
                <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
            
       </Grid>
    </main>
    )
}

export default Products