export default function validateInfo(values){
    let error={};
    if(!values.name.trim()){
        error.name="Product name is required"
    }

    if(!values.ean.trim()){
        error.ean="Product EAN code is required"
    } else if( !/^[0-9\b]+$/.test(values.ean)){
        error.ean="Wrong product EAN, only numbers";
    } 

    if(!values.type.trim()){
        error.type="Product type is required"
    }
    if(!values.weight){
        error.weight="Product weight is required"
    }   else if(!/^[0-9]+\.[0-9]{1,2}$/.test(values.weight)){
        error.weight="Wrong product weight, 1 or 2 digits after comma"
    }
    if(!values.color.trim()){
        error.color="Product color is required"
    }   else if(!/^[A-Za-z]+$/.test(values.color)){
        error.color="Wrong product color, only letters"
    }
    if(!values.quantity){
        error.quantity="Product quantity is required"
    }     else if( !/^[0-9\b]+$/.test(values.quantity)){
        error.quantity="Wrong product Quantity, only numbers";
    }
    if(!values.price){
        error.price="Product price is required"
    } else if(!/^[0-9]+\.[0-9]{1,2}$/.test(values.price)){
        error.price="Wrong product price, 1 or 2 digits after comma"
    }
    return error;
    
}
