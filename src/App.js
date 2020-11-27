
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import BookList from './BookList';
import Nbar from './Nbar';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Container>
        <Nbar/>
        <h1 style={{paddingTop: "20px"}}>BEST SELLING BOOK LIST</h1>
          <br></br>
          <BookList/>
        </Container>

      </div>
    )
  }
}

export default App;
