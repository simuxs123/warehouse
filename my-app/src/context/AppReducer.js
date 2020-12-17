export const AppReducer= (state,action)=>{
    switch(action.type){
        case "REMOVE_PRODUCT":
            return{...state,
                products:state.products.filter(item=>{return item.id!==action.payload}),
            }
        case "ADD_PRODUCT":
            return{...state,
                products:[action.payload,...state.products]               
            }
        case "EDIT_PRODUCT":
                const updatedProduct=action.payload;
                let priceHist=updatedProduct.priceHistory;
                let quantHist=updatedProduct.quantityHistory;
                let quantAction="";
                let quantAmount=0;
                const updateProducts=state.products.map(item=>{
                    if(item.id===updatedProduct.id){ //ieskom reikiamo produkto
                        if(item.price!==updatedProduct.price){  //tvarkom priceHistory
                            if(priceHist.length>4){
                                priceHist.shift();
                            }                                           
                                priceHist=[...updatedProduct.priceHistory,{prices:updatedProduct.price,date: new Date().toLocaleString()}]
                        }

                        if(item.quantity!==updatedProduct.quantity){  //Tvarkom quantityHistory
                            if(Number(updatedProduct.quantity)>Number(item.quantity)){
                                quantAction="Added"
                                quantAmount=Number(updatedProduct.quantity)-Number(item.quantity);
                            } else {
                                quantAction="Removed"
                                quantAmount=Number(item.quantity)-Number(updatedProduct.quantity);
                            }
                            if(quantHist.length>4){
                                quantHist.shift();
                            }                                           
                                quantHist=[...updatedProduct.quantityHistory,{date: new Date().toLocaleString(),action:quantAction,quantityAmount:quantAmount}]
                        }
                        return {...updatedProduct,priceHistory:priceHist,quantityHistory:quantHist};
                    }
                    return item;
                })
                return{
                   ...state,
                    products:updateProducts
                }              
         case "DISABLED_PRODUCT":
                const disableProducts=state.products.map(item=>{
                    if(item.id===action.payload){
                        return {...item, active:!item.active}
                    }
                    return item;
                })
                return{       
                    ...state, 
                    products:disableProducts
                }  
         case "SEARCH_PRODUCT":
            return{
                ...state,
                searchW:action.payload,
                isSearchActive:action.payload.length>0 || false,
                foundProducts:state.products.filter(item=>{
                    return item.name.toLowerCase().search(action.payload.toLowerCase())!==-1
                })
            }   
         case "SEARCH_QUANTITY":
            return{...state,
                products0Quantity:state.products.filter(item=>{return item.quantity===action.payload})

            }           
        default: return state;
    }
}