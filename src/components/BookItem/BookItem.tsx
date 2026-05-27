// import type { BookItemProps } from "../../types/livro"
// import axios from "axios"
import { memo } from "react"

const BookItem = memo(() => {
    const api = import.meta.env.VITE_LOCAL_API;

    // function handleRemove() {
    //     axios.delete(`${api}/livros/${_id}`)
    //         .then((response) => {
    //             console.log("Livro removido com sucesso:", response.data);
    //         })
    //         .catch((error) => {
    //             console.error("Erro ao remover livro:", error);
    //         });
    // }

    return (
       <div>
            <h2>titulo</h2>
            <p>Autor: autor</p>
            <p>Status: status</p>
            <button>Remover</button>
       </div>
    )
})

export default BookItem