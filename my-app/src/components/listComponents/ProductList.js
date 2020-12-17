import React,{useContext,useState,useEffect} from 'react'
import {Table} from 'reactstrap'
import {GlobalContext} from "../../context/GlobalState"
import {Link} from 'react-router-dom'
import {FaTrashAlt,FaEdit,FaSearch} from 'react-icons/fa'
import { Disable } from 'react-disable';
import capitalize from "../capitalize"
import Pagination from '../Pagination'
export const ProductList = () => {   
    const {searchProduct,searchW,products,removeProduct,disabledProduct,isSearchActive,foundProducts}=useContext(GlobalContext);
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [productsPerPage]=useState(10);
    const indexOfLastPost=currentPage*productsPerPage;
    const indexOfFirstPost=indexOfLastPost-productsPerPage;
    const currentProducts=filteredProducts.slice(indexOfFirstPost,indexOfLastPost);
    const toggle =(id) => {
            disabledProduct(id) ;
            searchProduct(searchW);   
    }
    useEffect(()=>{      
        setFilteredProducts(isSearchActive?foundProducts:products);
        foundProducts.length<=productsPerPage?setCurrentPage(1):setCurrentPage(currentPage)
    },[isSearchActive,products,foundProducts,productsPerPage,currentPage])
    
    const handleBtn=(id)=>{
        removeProduct(id)
        searchProduct(searchW);
        currentProducts.length===1?setCurrentPage(currentPage-1):setCurrentPage(currentPage)
    }
    const paginate=(n)=>{
        setCurrentPage(n);
    }
    return (
        <>
                {filteredProducts.length>0?(
                    <>
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
                            <th className="text-center">Enable/Disable</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map(item=>
                            <tr key={item.id}>
                                <td>{capitalize(item.name)}</td>
                                <td>{item.ean}</td>
                                <td>{capitalize(item.type)}</td>
                                <td>{item.weight}Kg</td>
                                <td>{capitalize(item.color)}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}$</td>
                                <td className="text-center">
                                        <input type="checkbox" id="checkbox1" defaultChecked={item.active} onClick={()=>toggle(item.id)} />
                                </td>
                                <td>
                                   <Disable disabled={item.active}>
                                        <Link className=" text-danger" to="/" onClick={()=>handleBtn(item.id)}><FaTrashAlt/></Link>
                                        <Link className="ml-lg-2 text-warning" to={`/products/edit/${item.id}`}><FaEdit/></Link>
                                        <Link className="ml-lg-2 text-success" to={`/products/${item.id}`}><FaSearch/></Link>
                                    </Disable>
                                </td>
                            </tr> )}                   
                    </tbody>
                </Table>
                {<Pagination totalProducts={filteredProducts.length} paginate={paginate} currentPage={currentPage} productsPerPage={productsPerPage}/>}
                </>
                ):(
                    <>
                    <h1 className="text-center">No products</h1>
                    </>
                )}                
       </>     
    )
}
    