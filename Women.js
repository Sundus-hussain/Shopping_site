import { useEffect, useState } from "react"

function Women(){

const[products,setProducts]=useState([]);

useEffect(()=>{
    fetch("http://fakestoreapi.com/products/category/women's%20clothing")
    .then(response=>
        response.json())
        .then(data=>{
            setProducts(data)
        })
    
},[])

    return(
        <div className="contianer-fluid">
             <h3>Women's Clothing</h3>
            <div className="d-flex flex-wrap">
               
                {
                    products.map(product=>
                        <div className="card p-2 m-2" style={{width:'150px'}}> 
                        <img src={product.image} height="100" className="card-img-top" />
                        <div className="card-header">
                            <p>{product.title}</p>
                        </div>
                        </div>
                    )
                }

            </div>
        </div>

    )
}

export default Women;