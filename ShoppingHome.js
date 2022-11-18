import{ Link } from "react-router-dom";
function ShoppingHome(){

    return(
        <div className="row">
            <div className="col">
                <div className="card">
                    <img src="images/men clothing.jpeg" className="card-img-top" style={{height:'300px'}}/>
                    <div className="card-footer text-center">
                        <Link to="/men" className="btn btn-info w-100">Men's</Link>

                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <img src="images/w.jpeg" className="card-img-top" style={{height:'300px'}}/>
                    <div className="card-footer text-center ">
                        <Link to="/women" className="btn btn-danger w-100">Women's</Link>

                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <img src="images/kids clothing.jpeg" className="card-img-top" style={{height:'300px'}}/>
                    <div className="card-footer text-center">
                        <button className="btn btn-secondary w-100">Kid's</button>

                    </div>
                </div>
            </div>

        </div>
    )
    

}

export default ShoppingHome;