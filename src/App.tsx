import BookForm from "./components/BookForm/BookForm"
import BookList from "./components/BookList/BookList"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);

  function fetchData() {
    const api = import.meta.env.VITE_LOCAL_API;

    axios.get(`${api}/livros`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erro ao acessar a API:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BookForm onBookAdded={fetchData} />
      <BookList livros={data} updateList={fetchData} />
    </>
  )
}

export default App