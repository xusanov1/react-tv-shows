import './App.css';
import { Routes, Route } from "react-router-dom";
import Movie from "./routes/Movie"
import Details from "./single/SinglePage"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  )
}

export default App;