
import { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import BookList from './BookList';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Container>
          <h1>Book List</h1>
          <BookList/>
        </Container>

      </div>
    )
  }
}

export default App;
