import React from 'react';
import {Container} from "reactstrap"
import {Header} from './listComponents/Header'
import {ProductList} from './listComponents/ProductList'
export const List = () =>  {
  return (
    <Container fluid="lg" className="mt-4"> 
       <Header/>         
       <ProductList/>  
    </Container>
  );
}
