import { Provider } from "jotai";
import BookForm from "./components/BookForm/BookForm"
import BookList from "./components/BookList/BookList"

function App() {
  return (
    <Provider>
      <div>
        <BookForm />
        <BookList />
      </div>
    </Provider>
  )
}

export default App