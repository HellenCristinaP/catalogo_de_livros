import type { BookItemProps } from "../../types/livro"
import axios from "axios"
import { memo } from "react"

const BookItem = memo(({ titulo, autor, status, _id, onDeleted }: BookItemProps & { onDeleted: () => void }) => {
    const api = import.meta.env.VITE_LOCAL_API;

    function handleRemove() {
        axios.delete(`${api}/livros/${_id}`)
            .then((response) => {
                console.log("Livro removido com sucesso:", response.data);
                onDeleted();
            })
            .catch((error) => {
                console.error("Erro ao remover livro:", error);
            });
    }

    return (
       <div>
            <h2>{titulo}</h2>
            <p>Autor: {autor}</p>
            <p>Status: {status}</p>
            <button onClick={handleRemove}>Remover</button>
       </div>
    )
})

export default BookItem