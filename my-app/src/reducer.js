export const reducer=(state,action)=>{
  if(action.type==="ADD_ITEM"){
    const newItem=[...state.product,action.payload]
  return{
    ...state,
    product:newItem,
    isModalOpen:true,
    modalContent:"Added"
  }
  }
  if(action.type==="NO_VALUE"){
  return{
    ...state,
    isModalOpen:true,
    modalContent:"Emty value"
  }
  }
  if(action.type==="CLOSE_MODAL"){
    return {
      ...state,
      isModalOpen:false
    }
  }
  if(action.type==="REMOVE_ITEM"){
    const newItem=state.product.filter((item)=>item.id!==action.payload)
  return{
    ...state,
    product:newItem
  }
  }
};