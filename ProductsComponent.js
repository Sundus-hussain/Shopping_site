import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductsComponent(){
    const params = useParams();
    const[products,setProducts] = useState([]);

    useEffect(()=>{
        fetch(`http://fakestoreapi.com/products/category/${params.category}`)
        .then (response=>response.json())
        .then(data=>{setProducts(data);
        })
    },[params.category])

    return (
        <div>
            <h2>{params.category} Lists</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product=>
                        <div className="card m-2 p-2" style={{width:'120px'}}>
                            <img src={product.image} height="100px" className="card-img-top"/>
                            </div>
                            
                            )
                }
            </div>
            <div>
                <Link to="/categories">Back to Categories</Link>
            </div>
        </div>
    )

}

export default ProductsComponent;