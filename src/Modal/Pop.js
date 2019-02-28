import React, { Component } from 'react';
import {Button,Modal} from 'react-bootstrap';

class Pop extends Component {
    render() {
        const{show,onHide, heading}= this.props;
        return (
            <Modal show={show} onHide={()=>onHide()}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>{heading.title}</h3>
                    <h6>{heading.subtitle}</h6>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {this.props.children}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => onHide()}>Close</Button>
                <Button variant="primary" >Save changes</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}

export default Pop;