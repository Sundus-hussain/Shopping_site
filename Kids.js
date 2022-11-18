import { useEffect, useState } from "react";


function Kids(){
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://fakestoreapi.com/products/category/kid's%20clothing")
    })

  
}

export default Kids;