import React from 'react'
import { Grid } from '@mui/material'

const Products = () => {

    const products= [
        {
            id:1,
            name:"laptop",
            disc:"hp"
        },
        {
            id:2,
            name:"mobile",
            disc:"samsung"
        }
    ]
  return (
    <main>
        <Grid container justify='center' spacing={4}>
            
        </Grid>
    </main>
  )
}

export default Products