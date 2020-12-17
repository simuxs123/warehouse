import React,{useContext,useState,useEffect} from 'react'
import { Button, Form, FormGroup, Label, Input,Col, Container,ListGroupItem,ListGroup} from 'reactstrap'
/* import { Modal } from 'react-bootstrap'; */
import {Link,useHistory} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import {Modale} from './Modale'
import validate from "./validateInfo"
export const Edit = (props) => {
    const [modal, setModal] = useState(false);
    const [selectedProduct,setSelectedProduct]=useState({
        id:"",
        name:"",
        ean:"",
        type:"",
        weight:"",
        color:"",
        quantity:"",
        price:""
    });
    const [errors,setErrors]=useState({});
    const {products,editProduct}=useContext(GlobalContext);
    const history=useHistory();
    const currentProductId=props.match.params.id;

    useEffect(()=>{
        const productId=currentProductId;
        const selectedProduct=products.find(item=>item.id===productId);
        setSelectedProduct(selectedProduct);
    },[currentProductId,products])

    const toggle = () =>{ 
        setErrors(validate(selectedProduct));
        if(Object.keys(validate(selectedProduct)).length===0){
        setModal(!modal)
        }
    };
    const handleEdit=()=>{
        editProduct(selectedProduct)
        history.push('/')
    }
       
    const handleChange=(e)=>{
        setSelectedProduct({
            ...selectedProduct,
            [e.target.name]:e.target.value
        })
        }
    
    return (
        <Container className="mt-4">
            <ListGroup > 
                <ListGroupItem > 
                    <h1>Edit product</h1>
                    <hr/>
                    <Form>
                    <FormGroup row>
                        <Label htmlFor="name" sm={2}>Name</Label>
                        <Col sm={10}>
                        <Input type="text" name="name" id="name" value={selectedProduct.name} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    {errors.name &&<p className="text-danger text-center error">{errors.name}</p>}
                    <FormGroup row>
                        <Label htmlFor="ean" sm={2}>Ean</Label>
                        <Col sm={10}>
                        <Input type="text" name="ean" id="ean" value={selectedProduct.ean} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    {errors.ean &&<p className="text-danger text-center error">{errors.ean}</p>}
                    <FormGroup row>
                        <Label htmlFor="type" sm={2}>Type</Label>
                        <Col sm={10}>
                        <Input type="text" name="type" id="type" value={selectedProduct.type} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                     {errors.type &&<p className="text-danger text-center error">{errors.type}</p>}
                    <FormGroup row>
                        <Label htmlFor="weight" sm={2}>Weight</Label>
                        <Col sm={10}>
                        <Input type="text" name="weight" id="weight" value={selectedProduct.weight} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    {errors.weight &&<p className="text-danger text-center error">{errors.weight}</p>}
                    <FormGroup row>
                        <Label htmlFor="color" sm={2}>Color</Label>
                        <Col sm={10}>
                        <Input type="text" name="color" id="color" value={selectedProduct.color} onChange={handleChange} />
                        </Col>
                    </FormGroup>
                    {errors.color &&<p className="text-danger text-center error">{errors.color}</p>}
                    <FormGroup row>
                        <Label htmlFor="quantity" sm={2}>Quantity</Label>
                        <Col sm={10}>
                        <Input type="text" name="quantity" id="quantity" value={selectedProduct.quantity} onChange={handleChange} placeholder="e.g. 1"/>
                        </Col>
                    </FormGroup>
                    {errors.quantity &&<p className="text-danger text-center error">{errors.quantity}</p>}
                    <FormGroup row>
                        <Label htmlFor="price" sm={2}>Price</Label>
                        <Col sm={10}>
                        <Input type="text" name="price" id="price" value={selectedProduct.price} onChange={handleChange} placeholder="e.g. 1.00"/>
                        </Col>
                    </FormGroup>
                    {errors.price &&<p className="text-danger text-center error">{errors.price}</p>}
                    <FormGroup row>
                        <Col >
                        <Button onClick={toggle}>Edit</Button>
                        <Link className="btn btn-danger ml-2" to="/">Cancel</Link>    
                        </Col>
                        <Modale toggle={toggle} modal={modal} handleEdit={handleEdit}/>
                    </FormGroup>
                    </Form>
                </ListGroupItem>                
            </ListGroup>        
        </Container>
                    
    )
}
