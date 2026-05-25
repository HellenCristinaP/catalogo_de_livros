import BookItem from "../BookItem/BookItem"
import type { BookItemProps } from "../../types/livro"
import { memo } from "react"

const BookList = memo(({ livros, updateList }: { livros: BookItemProps[]; updateList: () => void }) => {

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
                    updateList={updateList}
                />
            ))}
        </div>
    )
})

export default BookList