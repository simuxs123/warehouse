import React,{useContext,useState} from 'react'
import { Button, Form, FormGroup, Label, Input,Col, Container,ListGroup,ListGroupItem } from 'reactstrap';
import {GlobalContext} from "../context/GlobalState"
import {Link,useHistory} from "react-router-dom"
import {v4 as uuid} from "uuid"
import validate from "./validateInfo"
export const New = () => {
    const [product,setProduct]=useState({
        name:"",
        ean:"",
        type:"",
        weight:"",
        color:"",
        quantity:"",
        price:""
    })
    const [errors,setErrors]=useState({});
    const {addProduct}=useContext(GlobalContext);
    const history=useHistory();
    const onSubmit=(e)=>{
        e.preventDefault();
        setErrors(validate(product));
        if(Object.keys(validate(product)).length===0){
        const newProduct={
            id:uuid(),
            name:product.name,
            ean:product.ean,
            type:product.type,
            weight:product.weight,
            color:product.color,
            active:false,
            quantity:product.quantity,
            price:product.price,
            priceHistory:[],
            quantityHistory:[]
        }
        addProduct(newProduct);
        history.push('/products')
    }
    }
    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({
            ...product,
            [e.target.name]:value
        })
    }
    return (
        <Container className="mt-4">
            <ListGroup > 
                <ListGroupItem >
                    <h1>Add product</h1>
                    <hr/>
                    <Form onSubmit={onSubmit}>
                    <FormGroup row>
                        <Label htmlFor="name" sm={2}>Name</Label>
                        <Col sm={10}>
                        <Input type="text" name="name" id="name" value={product.name} onChange={handleChange} placeholder="e.g. Oven"/>
                        </Col>
                    </FormGroup>
                    {errors.name &&<p className="text-danger text-center error">{errors.name}</p>}
                    <FormGroup row>
                        <Label htmlFor="ean" sm={2}>Ean</Label>
                        <Col sm={10}>
                        <Input type="text" name="ean" id="ean" value={product.ean} onChange={handleChange} placeholder="e.g. 12345678"/>
                        </Col>
                    </FormGroup>
                    {errors.ean &&<p className="text-danger text-center error">{errors.ean}</p>}
                    <FormGroup row>
                        <Label htmlFor="type" sm={2}>Type</Label>
                        <Col sm={10}>
                        <Input type="text" name="type" id="type" value={product.type} onChange={handleChange} placeholder="e.g. Electronic"/>
                        </Col>
                    </FormGroup>
                    {errors.type &&<p className="text-danger text-center error">{errors.type}</p>}
                    <FormGroup row>
                        <Label htmlFor="weight" sm={2}>Weight</Label>
                        <Col sm={10}>
                        <Input type="text" name="weight" id="weight" value={product.weight} onChange={handleChange} placeholder="e.g. 75.25"/>
                        </Col>
                    </FormGroup>
                    {errors.weight &&<p className="text-danger text-center error">{errors.weight}</p>}
                    <FormGroup row>
                        <Label htmlFor="color" sm={2}>Color</Label>
                        <Col sm={10}>
                        <Input type="text" name="color" id="color" value={product.color} onChange={handleChange} placeholder="e.g. Black"/>
                        </Col>
                    </FormGroup>
                    {errors.color &&<p className="text-danger text-center error">{errors.color}</p>}
                    <FormGroup row>
                        <Label htmlFor="quantity" sm={2}>Quantity</Label>
                        <Col sm={10}>
                        <Input type="text" name="quantity" id="quantity" value={product.quantity} onChange={handleChange} placeholder="e.g. 1"/>
                        </Col>
                    </FormGroup>
                    {errors.quantity &&<p className="text-danger text-center error">{errors.quantity}</p>}
                    <FormGroup row>
                        <Label htmlFor="price" sm={2}>Price</Label>
                        <Col sm={10}>
                        <Input type="text" name="price" id="price" value={product.price} onChange={handleChange} placeholder="e.g. 1.00"/>
                        </Col>
                    </FormGroup>
                    {errors.price &&<p className="text-danger text-center error">{errors.price}</p>}
                    <FormGroup row>
                        <Col >
                        <Button type="submit">Save</Button>
                        <Link className="btn btn-danger ml-2" to="/products">Cancel</Link>    
                        </Col>
                    </FormGroup>
                    </Form>   
                </ListGroupItem>                
            </ListGroup>        
        </Container>
    )
}
