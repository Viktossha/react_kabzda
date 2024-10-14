import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "react use callback demo"
}

const BooksSecret = (props: {addBook: () => void}) => {
    console.log('books secret')
    return <div>{
        <button onClick={() => props.addBook()}>add book</button>
    }</div>
}

const Books = React.memo(BooksSecret)

export const Example = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'CSS', 'HTML', 'REACT'])


    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    //const memoizedAddBook = useMemo(() => addBook, [books])
    const memoizedAddBook = useCallback(addBook, [books])

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}