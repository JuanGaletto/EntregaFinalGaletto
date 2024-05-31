import React, { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";

function ItemListContainer({ saludo, category }) {
  const { isLoading: productsLoading, products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  if (productsLoading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1>{saludo}</h1>
      <ItemList products={filteredProducts} />
    </div>
  );
}


export default ItemListContainer;
