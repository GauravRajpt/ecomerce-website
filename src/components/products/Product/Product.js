import React from 'react'
import { Card, CardMedia , CardContent, CardActions, Typography, IconButton } from '@mui/material'
import {  AddShoppingCart } from '@mui/icons-material'
import useStyles from "./styles"

function Product({product}) {

    const classes= useStyles();
  return (
    <Card className={classes.root}> 
        <CardMedia className={classes.media} image='' title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>

                <Typography variant='h5'>
                    {product.price}
                </Typography>

                <Typography variant='h5' color='textSecondary'>
                    {product.discription}
                </Typography>

            </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActons}>
            <IconButton aria-label='add to cart'>
                <AddShoppingCart/>
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product