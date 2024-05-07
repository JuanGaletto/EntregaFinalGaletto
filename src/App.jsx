import "./App.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/inicio" />
        <Route path="/futbol" element={<h1>Articulos de Futbol</h1>} />
        <Route path="/tenis" element={<h1>Articulos de Tenis</h1>} />
        <Route path="/hockey" element={<h1>Articulos de Hockey</h1>} />
        <Route path="/basket" element={<h1>Articulos de BasketBall</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
      <ItemListContainer saludo={"Bienvenidos!!"} />
    </Layout>
    </BrowserRouter>
}

export default App;
