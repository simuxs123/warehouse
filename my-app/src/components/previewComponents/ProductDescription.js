import React from 'react'
import {Link} from 'react-router-dom'
export const ProductDescription = ({name,ean,type,weight,color,quantity,price}) => {
    return (
        <div>
            <div className="py-2"><strong>Name</strong>: {name}</div>
            <div className="py-2"><strong>EAN</strong>: {ean}</div>
            <div className="py-2"><strong>Type</strong>: {type} </div>
            <div className="py-2"><strong>Weight</strong>: {weight}KG</div>
            <div className="py-2"><strong>Color</strong>: {color} </div> 
            <div className="py-2"><strong>Quantity</strong>: {quantity} </div> 
            <div className="py-2"><strong>Price</strong>: {price}$ </div> 
            <Link className="btn btn-success" to="/">Go back</Link>  
        </div>
    )
}
