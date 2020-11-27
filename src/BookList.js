import React from 'react';
import {Table} from 'react-bootstrap';

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
               <div>Data not avilable{error.message}</div>
           )
       }else{
           return(
               <div>
                   <Table>
                       <thead>
                           <tr>
                               <th>Top List</th>
                               <th>Title</th>
                               <th>Author</th>
                           </tr>
                       </thead>
                       {this.state.datalist.map(book =>(
                         <tr key={book.rank}>
                             <td>{book.rank}</td>
                             <td>{book.title}</td>
                             <td>{book.author}</td>

                         </tr>  
                       ))}
                   </Table>
               </div>
           )
       }
    }
}