import { Route, Routes, Link } from "react-router-dom";

import Home from "./component/Home";
import Booklist from "./component/Booklist";
import Book from "./component/Book";
import NewBook from "./component/NewBook";
import BookLayout from "./BookLayout";
import PageNotFound from "./component/PageNotFOund";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Book">Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Book" element={<BookLayout />}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
