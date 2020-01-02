import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Modal extends Component{
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop">
                <div className="modals">
                    <div className="footer">
                    <button type="button" className="closer" aria-label="Close" onClick={this.props.onClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;