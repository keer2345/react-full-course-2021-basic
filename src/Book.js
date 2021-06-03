const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    console.log('Example')
  }
  const clickContent = (content) => {
    console.log(content)
  }
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Button1
      </button>
      <button type='button' onClick={() => clickContent(title)}>
        Button2
      </button>
      <button type='button' onClick={() => clickContent(author)}>
        Button3
      </button>
    </article>
  )
}

export default Book
