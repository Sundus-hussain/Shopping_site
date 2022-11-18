import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Men from "./Men.js";
import Women from "./Women.js";
import Categories from "./Categories";
import ShoppingHome from "./ShoppingHome";
import './ShoppingIndex.css';
import ProductsComponent from "./ProductsComponent.js";
import ShoppingLogin from "./ShoppingLogin.js";
import ShoppingError from "./ShoppingError.js";

function ShoppingIndex (){

    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="d-flex justify-content-between bg-black p-2 text-white">
                <div>
                    <span style={{fontWeight:'bold' , fontSize:'22px'}}>Shopper</span>
                </div>
                <div>
                    <span className="me-3"><Link to="home">Home</Link></span>
                    <span className="me-3"><Link to="men">Men</Link></span>
                    <span className="me-3"><Link to="women">Women</Link></span>
                    <span className="me-3">Kids</span>
                    <span className="me-3"><Link to="categories">Categories</Link></span>
                </div>
                <div>
                    <Link to ="login"><span className="bi bi-person me-3"></span></Link>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </header>
            <section style={{height:"400px"}}>
                <Routes>
                    <Route path="/" element={<ShoppingHome/>} />
                    <Route path="/home" element={<ShoppingHome/>} />
                    <Route path="/men" element={<Men/>} />
                    <Route path="/women" element={<Women/>}/>
                    <Route path="/categories" element={<Categories/>}/>
                    <Route path="*" element={<code>Page you requested - Not Found </code>}/>
                    <Route path="/products/:category" element={<ProductsComponent/>} />
                    <Route path="/login" element={<ShoppingLogin/>}/>
                    <Route path="/error" element={<ShoppingError/>}/>
                    
                    </Routes>
                
            </section>
                <footer className="row p-3 bg-black text-white m-1">
                    <div className="col">
                        <ul className="list-unstyled">
                   <li>SUPPORT</li> 
                   <li>Contact Us</li> 
                    <li>FAQs</li>
                     <li>Size Guide</li>   
                    <li>Shipping & Returns</li>
                    </ul>
                    </div>
                    <div className="col">
                    <ul className="list-unstyled">
                    <li>SHOP</li> 
                    <li>Men's Shopping</li>
                    <li>Women's Shopping</li>
                    <li>Kids' Shopping</li>
                    <li>Discounts</li>
                    </ul>
                    </div>
                    
                    <div className="col">
                    <ul className="list-unstyled">
                    COMPANY
                    <li>Our Story</li>
                    <li>Careers</li>    
                    <li>Terms & Conditions</li>    
                    <li>Privacy & Cookie policy</li>
                    </ul>
                    </div>
                    
                    <div className="col">
                    <ul className="list-unstyled">

                    <li>CONTACT</li>
                    <li>1-202-555-0105</li>
                    <li>1-202-555-0106</li>
                    <li>help@shopper.com</li>
                    </ul>
                    </div>
                </footer>
          
                </BrowserRouter>
        </div>
    )
}

export default ShoppingIndex;