import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const Common = (props) => {


    return (
        <>




            <div id="header" className="">

                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-10 mx-auto">

                            <div className="row">

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column ">
                                    <h2>{props.name} <strong className="brand-name">Amiiii</strong></h2>
                                    <h3 className="my-3">
                                        we are the team of talented developer making website
                                    </h3>
                                    <div clasName="mt-3">
                                        <NavLink to={props.visit} ><button type="button" class="btn btn-primary"> {props.btname}</button></NavLink>
                                    </div>

                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid  animated " alt="home img" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Common;
