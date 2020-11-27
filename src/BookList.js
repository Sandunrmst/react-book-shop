import React from 'react';
import {Card,Button} from 'react-bootstrap';

export default class Boolist extends React.Component{
    state = {
        loading: true,
        datalist:[]
    };

    async componentDidMount(){
        const apiUrl= 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5PMJIRku81WguLNazZ87JQGsvnpN4BCL';
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.setState({datalist:data.results.books});
        console.log(this.state.datalist);
    }
    render(){
       const {error}=this.state;
       if(error){
           return(
               <div>New York Times{error.message}</div>
           )
       }else{
           return(
               <div className="col-14 mx-auto col-md-6 col-lg-3">
                   {this.state.datalist.map(book =>(
                       <Card style={{ width: '18rem' }}>
                       <Card.Img variant="top" src={book.book_image} />
                           <Card.Body>
                           <Card.Title>#Top List {book.rank}</Card.Title>
                           <Card.Title>{book.title}</Card.Title>
                           <Card.Text>
                               {book.description}
                           </Card.Text>
                                <a href={book.amazon_product_url} className="btn btn-primary" target="_blank" style={{margin:10}}>Buy Now </a>
                                <Button variant="primary">More</Button>
                               
                           </Card.Body>
                   </Card>
                   ))}
               </div>
           )
       }
    }
}