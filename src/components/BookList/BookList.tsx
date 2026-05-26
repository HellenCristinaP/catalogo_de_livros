import BookItem from "../BookItem/BookItem"
import type { BookItemProps } from "../../types/livro"
import { memo } from "react"

const BookList = memo(({ livros, onBookDeleted }: { livros: BookItemProps[]; onBookDeleted: () => void }) => {

    return (
        <div>
            <h1>Lista de Livros</h1>
            {livros.map((livro) => (
                <BookItem
                    key={livro._id}
                    _id={livro._id}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    status={livro.status}
                    onDeleted={onBookDeleted}
                />
            ))}
        </div>
    )
})

export default BookList