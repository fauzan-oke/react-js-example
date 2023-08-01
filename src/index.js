import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./pages/Hello";
import Tictoe from "./pages/Tictoe";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />}></Route>
        <Route path="/tictoe" element={<Tictoe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);