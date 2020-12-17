import React,{createContext,useReducer,useEffect} from "react"
import {AppReducer} from './AppReducer'
const initialState={
    products:[
        {id:"labas",name:"headphones",ean:"12736749",type:"electronic", weight:"20.6", color:"red",quantity:"5",price:"5.6",active:false,priceHistory:[],quantityHistory:[]},
        {id:"2",name:"oven",ean:"12736749",type:"electronic", weight:"20.5", color:"red",quantity:"5",price:"5.4",active:false,priceHistory:[],quantityHistory:[]},
        {id:"3",name:"headphones",ean:"12736749",type:"electronic", weight:"20.4", color:"red",quantity:"5",price:"5.34",active:false,priceHistory:[],quantityHistory:[]},
        {id:"4",name:"headphones",ean:"12736749",type:"electronic", weight:"20.9", color:"red",quantity:"5",price:"5.23",active:false,priceHistory:[],quantityHistory:[]},
        {id:"5",name:"headphones",ean:"12736749",type:"electronic", weight:"20.3", color:"red",quantity:"5",price:"5.67",active:false,priceHistory:[],quantityHistory:[]},
        {id:"6",name:"headphones",ean:"12736749",type:"electronic", weight:"20.5", color:"red",quantity:"5",price:"5.98",active:false,priceHistory:[],quantityHistory:[]},
        {id:"7",name:"headphones",ean:"12736749",type:"electronic", weight:"20.12", color:"red",quantity:"5",price:"5.65",active:false,priceHistory:[],quantityHistory:[]},
        {id:"8",name:"blender",ean:"12736749",type:"electronic", weight:"20.45", color:"red",quantity:"5",price:"5.43",active:false,priceHistory:[],quantityHistory:[]},
        {id:"9",name:"headphones",ean:"12736749",type:"electronic", weight:"20.65", color:"red",quantity:"5",price:"5.23",active:false,priceHistory:[],quantityHistory:[]},
        {id:"10",name:"headphones",ean:"12736749",type:"electronic", weight:"20.78", color:"red",quantity:"5",price:"5.99",active:false,priceHistory:[],quantityHistory:[]},
        {id:"11",name:"headphones",ean:"12736749",type:"electronic", weight:"20.54", color:"red",quantity:"5",price:"5.99",active:false,priceHistory:[],quantityHistory:[]},
        {id:"12",name:"headphones",ean:"12736749",type:"electronic", weight:"20.89", color:"red",quantity:"5",price:"5.99",active:false,priceHistory:[],quantityHistory:[]}
    ],
    isSearchActive:false,
    foundProducts:[], 
    searchW:""
}
  export const GlobalContext=createContext(initialState);
  
  export const GlobalProvider =({children})=>{
      const localData=localStorage.getItem("state");
    const [state,dispatch]=useReducer(AppReducer,JSON.parse(localData)||initialState);
    useEffect(()=>{
        localStorage.setItem("state",JSON.stringify(state))
    },[state])
    const removeProduct=(id)=>{
        dispatch({
            type:"REMOVE_PRODUCT",
            payload:id
        })
    }
    const addProduct=(product)=>{
        dispatch({
            type:"ADD_PRODUCT",
            payload:product
        })
    }
    const editProduct=(product)=>{
        dispatch({
            type:"EDIT_PRODUCT",
            payload:product
        })
    }
    const disabledProduct=(id)=>{
        dispatch({
            type:"DISABLED_PRODUCT",
            payload:id
        })
    }
    const searchProduct=(word)=>{
        dispatch({
            type:"SEARCH_PRODUCT",
            payload:word
        })
    }  

    
    return (
        <GlobalContext.Provider value={{searchW:state.searchW,products:state.products,foundProducts:state.foundProducts,isSearchActive:state.isSearchActive,
        removeProduct,addProduct,editProduct,disabledProduct,searchProduct}}>
            {children}
        </GlobalContext.Provider>
    )
  }