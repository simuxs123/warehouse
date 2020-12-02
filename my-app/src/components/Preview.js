import React,{useContext,useEffect,useState} from 'react'
import {TabContent, TabPane, Nav, NavItem, NavLink,Container,Col,Row} from 'reactstrap'
import {GlobalContext} from "../context/GlobalState"
import capitalize from "./capitalize"
import classnames from 'classnames';
import {ProductListQuantity0} from "./ProductListQuantity0"
import {PriceHistory} from "./previewComponents/PriceHistory"
import {ProductDescription} from "./previewComponents/ProductDescription"
import {QuantityHistory} from "./previewComponents/QuantityHistory"
export const Preview = (props) => {
    const [selectedProduct,setSelectedProduct]=useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const {products}=useContext(GlobalContext);
    const [activeTab, setActiveTab] = useState('1');
    
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const currentProductId=props.match.params.id;
    useEffect(()=>{
        const productId=currentProductId;
        const selectedProduct=products.find(item=>item.id===productId);
        const searchProducts=products.filter(item=>Number(item.quantity)===0)
        setSelectedProduct({...selectedProduct, name:capitalize(selectedProduct.name), type:capitalize(selectedProduct.type),color:capitalize(selectedProduct.color)} );
        setFilteredProducts(searchProducts)
    },[currentProductId,products]);
    return (
        
        <Container className="mt-5">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    ><h4>Product details</h4>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >  <h4>Price history</h4>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >  <h4>Quantity history</h4>
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                        <ProductDescription {...selectedProduct}/>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        {selectedProduct.priceHistory&&<PriceHistory  {...selectedProduct} />}
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                    <Col sm="12">
                        {selectedProduct.quantityHistory&&<QuantityHistory  {...selectedProduct} />}      
                    </Col>
                </Row>
                </TabPane>
            </TabContent>
            {filteredProducts.length>0&&<ProductListQuantity0 filteredProducts={filteredProducts}/>}
          
        </Container>
           
        
    )
}
