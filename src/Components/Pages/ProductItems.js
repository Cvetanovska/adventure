import React from 'react'

function ProductItems({image,name}) {
    return (
        <div className="productItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            
            
        </div>
    )
}

export default ProductItems
