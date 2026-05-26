import BookForm from "./components/BookForm/BookForm"
import BookList from "./components/BookList/BookList"
import axios from "axios"
import { useEffect, useState } from "react"

const api = import.meta.env.VITE_LOCAL_API;

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/livros`);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao acessar a API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <BookForm onBookAdded={fetchData} />
      <BookList livros={data} onBookDeleted={fetchData} />
    </>
  )
}

export default App