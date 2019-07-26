import React from 'react';
import "./style.css";

class Modal extends React.Component {



    closeModal = () => {
        document.getElementById('theModal').style.display = 'none'
        document.getElementById('theModal').style.opacity = '0'
    }
    showModal = () => {
        document.getElementById('theModal').style.display = 'block'
        document.getElementById('theModal').style.opacity = '1'
    }

    render() {

         return (

                <div className="modal fade" id="theModal" role="dialog" aria-labelledby="theModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="theModal">{this.props.title}</h5>
                                <button id="closeIt" onClick={this.closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{this.props.message}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.closeModal} className="btn btn-secondary" data-dismiss="modal">Ok</button>
                            </div>
                        </div>
                    </div>

                </div>
                )
            }
}

export default Modal;


