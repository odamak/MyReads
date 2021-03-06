import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookShelfs from './ListBookShelfs'
import SearchBooksBar from './SearchBooksBar'


class BooksApp extends React.Component {

    state = {
 bookshelfs : [
    {
        "id": 1,
        "title": "Currently Reading",
        "Books": [
                    {
                        "id": 1,
                        "url": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                        "readingness": "Currently Reading",
                        "title": "To Kill a Mockingbird",
                        "author": "Harper Lee"
                    },
                    {
                        "id": 2,
                        "url": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
                        "readingness": "Currently Reading",
                        "title": "Ender's Game",
                        "author": "Orson Scott Card"
                    }
                 ]
    },

    {
        "id": 2,
        "title": "Want to Read",
        "Books": [
                    {
                        "id": 3,
                        "url": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                        "readingness": "Want to Read",
                        "title": "1776",
                        "author": "David McCullough"
                    },
                    {
                        "id": 4,
                        "url": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
                        "readingness": "Want to Read",
                        "title": "Harry Potter and the Sorcerer's Stone",
                        "author": "J.K. Rowling"
                    }
                 ]
    },

    {
        "id": 3,
        "title": "Read",
        "Books": [
                    {
                        "id": 5,
                        "url": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
                        "readingness": "Read",
                        "title": "The Hobbit",
                        "author": "J.R.R. Tolkien"
                    },
                    {
                        "id": 6,
                        "url": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
                        "readingness": "Read",
                        "title": "Oh, the Places You'll Go!",
                        "author": "Seuss"
                    },
                    {
                        "id": 7,
                        "url": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
                        "readingness": "Read",
                        "title": "The Adventures of Tom Sawyer",
                        "author": "Mark Twain"
                    }
                 ]
    }
]
}

changeBookshelf = (book) => {
    console.log("click on Book with book id "+book.id);
}

/*Model to follow
removeContact = (contact) => {
       this.setState((state) => ({
           contacts: state.contacts.filter((c) => c.id !== contact.id)

       }) )

   }
*/

    render() {
        return (
          <div>
          <SearchBooksBar />
          <ListBookShelfs onChangeBookshelf = {this.changeBookshelf}
                          bookshelfs = {this.state.bookshelfs}
          />
          </div>
          )

    }
}

export default BooksApp
