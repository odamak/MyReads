import React from 'react'



function ListBookShelfs (props) {

  const bookOptions=[
          {value: 'none', text: 'Move to...'},
          {value: 'currentlyReading', text: 'Currently Reading'},
          {value: 'wantToRead', text: 'Want to Read'},
          {value: 'read', text: 'Read'},
          {value: 'none', text: 'None'}
        ]

        //console.log('Props', this.props)
        return(
            <div className="list-books">
              <div className="list-books-title">
               <h1>MyReads</h1>
              </div>
            <div className="list-books-content">
            <div>
            { props.bookshelfs.map((bookshelf) => (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelf.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookshelf.Books.map((book) => (

                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.url})` }}></div>
                                <div className="book-shelf-changer">
                                  <script type="text/javascript">
                                    //find a way to give id to this select
                                  </script>
                                  <select id={'select'+book.id} onChange={() => props.onChangeBookshelf(book) }>
                                    {bookOptions.map((option) => (
                                      <option value={option.value}>{option.text}</option>
                                    ))}
                                  </select>
                                  {/*
                                  <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                  */}
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.author}</div>
                            </div>

                        ))}

                    </ol>
                </div>
            </div>

            ))}
            </div>
            </div>
            </div>
            )

}

export default ListBookShelfs;