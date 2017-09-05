export function selectBook(book){
    //selectBook is an actionCreator, it need to return an action
    return {
        type: 'BOOK_SELECTED', //<=== not good practices
        payload: book
    };
}