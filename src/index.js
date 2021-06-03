import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'
// books
import { data } from './books'
import Book from './Book'

const BookList = () => (
  <section className='booklist'>
    {data.map((book) => {
      return <Book key={book.id} {...book} />
    })}
  </section>
)

ReactDom.render(<BookList />, document.getElementById('root'))
