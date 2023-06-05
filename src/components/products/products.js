import React from 'react'
import { Grid, } from '@mui/material'
import Product from './Product/Product'

const Products = () => {

    const products= [
        {
            id:1,
            name:"laptop",
            disc:"hp",
            price: "$5"
        },
        {
            id:2,
            name:"mobile",
            disc:"samsung",
            price: "$15"
        }
    ]
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            {
                products.map((product)=>{
                    return (
                        <Grid item key={product.key} xs={12} sm={6} md={4} lg={2}>
                       <Product product={product}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    </main>
  )
}

export default Products