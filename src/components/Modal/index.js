import React from 'react';
import "./style.css";

function Modal(props) {
    return (
        
        <div className="modal fade" id="theModal" role="dialog" aria-labelledby="theModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="theModal">{props.title}</h5>
                        <button id="closeIt" type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
        
        )
}

export default Modal;


