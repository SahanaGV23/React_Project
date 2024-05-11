import './App.css';
import { Routes,Route} from 'react-router-dom';
import  BooksPage  from './components/BooksPage'
import BookDetailsPage  from './components/BookDetailsPage'

function App() {
  return (
    <Routes>
      <Route path="/" Component={BooksPage}/>
      <Route path="/books/:id" Component={BookDetailsPage}/>
    </Routes>
    
  );
}

export default App;
