import React, { Component } from 'react';
import './App.css';
import { Button,Form,Container,Row, Col } from 'react-bootstrap';
import Modal from './Modal/Pop';
import TreeView from  'react-treeviewer';
import {data} from './data';

class App extends Component {
  state = {
    show: false,
  };
  onClose =()=> {
    this.setState({show:false})
  }
  showPop = () =>{
    this.setState({show:true});
  }
  render() {
    return (
      <div className="App">
        <Button variant="primary" onClick={this.showPop}>Light</Button>
        <Modal show={this.state.show} onHide={this.onClose} heading={{subtitle: "New Pop", title: "Popup"}}>
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <Container>
              <Row>
                <Col><TreeView data={data} /></Col>
              </Row>
            </Container>
        </Modal>
      </div>
    );
  }
}

export default App;
