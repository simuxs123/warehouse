import React,{useContext,useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import {Navbar,Nav,NavItem,NavbarBrand,Container,Input} from 'reactstrap'
import {GlobalContext} from "../../context/GlobalState"
export const Header = () => {
    const {searchProduct}=useContext(GlobalContext);
    const [search,setSearch]=useState("");
    const handleChange=(e)=>{
        const searchText=e.target.value.trim().replace(/" "/g,"");
        setSearch(searchText)
    }
    useEffect(()=>{
        searchProduct(search);
    },[search])
    return (
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand href="/products">Product list</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary ml-2" to="/products/create">Add product<FaPlus/></Link> 
                    </NavItem>
                    <NavItem>
                        <Input className="ml-2" type="text" name="search" id="search" onChange={handleChange} placeholder="Search product"/>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
            
    )
}
