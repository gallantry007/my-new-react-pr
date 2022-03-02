import React from "react";
import web from "../src/Images/web.jpg"
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="row gy-4">
                        {
                            Sdata.map((val, ind) => {
                                return <Card
                                key={ind}

                                imagsrc= {val.imgsrc}
                                title={val.title}
                                />
                            })
                        }
                        
                    </div>
                </div>
            </div>
            </div>
        </>

    )
}

export default Service;