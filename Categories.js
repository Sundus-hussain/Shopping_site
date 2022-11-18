import { useEffect, useState } from "react"
import { Link} from "react-router-dom";

function Categories(){

    const[category,setCategory]=useState([]);

   useEffect(()=>{
       fetch("https://fakestoreapi.com/products/categories")
       .then(response=>response.json())
       .then(data=>{
        setCategory(data)
       })
   },[])

   
    return(
            <div className="container-fluid">
                <ul className="list-unstyled">
                    {
                        category.map(category=>
                    <li className="btn btn-dark mt-2 p-2 mb-2 w-25 d-block" key={category}><Link to={"/products/" + category}>{category} </Link></li>

                        )}

                </ul>

            </div>

    )

}

export default Categories;
     