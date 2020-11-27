import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'


class Nbar extends React.Component{

    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><b>New York Times</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">    
          </Nav>
  </Navbar.Collapse>
</Navbar>
        )  
    }
}

export default Nbar;