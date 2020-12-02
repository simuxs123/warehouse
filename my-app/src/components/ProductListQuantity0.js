import React,{useState} from 'react'
import capitalize from "./capitalize"
import {Button,Fade,Table} from 'reactstrap'

export const ProductListQuantity0 = ({filteredProducts}) => {
    const [fadeIn, setFadeIn] = useState(false);
    const toggleWarning = () => setFadeIn(!fadeIn);
    return (
        <>
            <Button className="mt-3" color="danger" onClick={toggleWarning}>{filteredProducts.length} Products with 0 quantity</Button>
            <Fade in={fadeIn}  className="mt-3">
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ean</th>
                            <th>Type</th>
                            <th>Weight</th>
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(item=>
                        <tr key={item.id}>
                            <td>{capitalize(item.name)}</td>
                            <td>{item.ean}</td>
                            <td>{capitalize(item.type)}</td>
                            <td>{item.weight}Kg</td>
                            <td>{capitalize(item.color)}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}$</td>    
                        </tr> )}                   
                    </tbody>
                </Table>
            </Fade>
        </>
    )
}
