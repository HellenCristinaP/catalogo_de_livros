import { useState } from "react"
import axios from "axios"

function BookForm({ onBookAdded }: { onBookAdded: () => void }) {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [status, setStatus] = useState("nao_lido");
    const api = import.meta.env.VITE_LOCAL_API;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        axios.post(`${api}/livros`, {
            titulo,
            autor,
            status
        })
            .then((response) => {
                console.log("Livro cadastrado com sucesso:", response.data);

                setTitulo("");
                setAutor("");
                setStatus("nao_lido");

                onBookAdded();
            })
            .catch((error) => {
                console.error("Erro ao cadastrar livro:", error);
            });
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                <legend>Cadastro de Livro</legend>

                <input
                    type="text"
                    name="title"
                    id="title"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
                <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="lido">Lido</option>
                    <option value="nao_lido">Não lido</option>
                </select>
                <button type="submit">Cadastrar</button>
            </fieldset>
        </form>
    )
}

export default BookForm