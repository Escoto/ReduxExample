import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map( book => {
            return (
                <li key={book.title} 
                    onClick={()=>this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    //whatever is returned will shou up as props inside BookList
    return {books: state.books};
}

//anything returned, will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, te result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);