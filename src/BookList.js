import React from 'react';

export default class Boolist extends React.Component{
    state = {
        loading: true
    };

    async componentDidMount(){
        const apiUrl= 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=5PMJIRku81WguLNazZ87JQGsvnpN4BCL';
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }
    render(){
        return(
            <div>
                {this.state.loading ? <div> Loadin...</div> : <div>Rank...</div>}
            </div>
        );
    }
}