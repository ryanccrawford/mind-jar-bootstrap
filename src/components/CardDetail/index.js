import React from "react";

function CardDetail(props) {
    return (
        <div className="card-content">
            <img alt="" className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        </div>
    );
}

export default CardDetail;
