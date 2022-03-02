import React from "react";
import web from "../src/Images/web.jpg";
import NavLink from "react-router-dom/NavLink";



const Card = (props) => {
    return (
        <>
                     <div className="col-md-8 col-10 mx-auto">
                        <div className="card">
                            <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc} />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{props.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                    </div>
            
        </>

    )
}

export default Card;