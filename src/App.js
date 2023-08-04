import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div />}></Route>
        <Route path="/sections/:filmId" element={<div />}></Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
